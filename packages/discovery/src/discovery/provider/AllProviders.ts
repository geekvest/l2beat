import type { Logger } from '@l2beat/backend-tools'
import {
  BlobClient,
  CelestiaApiClient,
  type HttpClient,
  RpcClient,
} from '@l2beat/shared'
import { assert } from '@l2beat/shared-pure'
import { providers } from 'ethers'
import type { DiscoveryChainConfig } from '../../config/types'
import { getExplorerClient } from '../../utils/IEtherscanClient'
import { BatchingAndCachingProvider } from './BatchingAndCachingProvider'
import type { DiscoveryCache } from './DiscoveryCache'
import { getBlockNumberTwoProviders } from './getBlockNumberTwoProviders'
import { HighLevelProvider } from './HighLevelProvider'
import type { IProvider, RawProviders } from './IProvider'
import { LowLevelProvider } from './LowLevelProvider'
import { MulticallClient } from './multicall/MulticallClient'
import { ReorgAwareCache } from './ReorgAwareCache'
import { type AllProviderStats, ProviderStats } from './Stats'

export class AllProviders {
  private config: Map<
    string,
    { config: DiscoveryChainConfig; providers: RawProviders }
  > = new Map()

  private lowLevelProviders: Map<string, LowLevelProvider> = new Map()
  private batchingAndCachingProviders: Map<string, BatchingAndCachingProvider> =
    new Map()
  private multicallClients: Map<string, MulticallClient> = new Map()
  private highLevelProviders: Map<string, HighLevelProvider> = new Map()

  constructor(
    chainConfigs: DiscoveryChainConfig[],
    http: HttpClient,
    private discoveryCache: DiscoveryCache,
    private logger: Logger,
  ) {
    for (const config of chainConfigs) {
      const baseProvider = new providers.StaticJsonRpcProvider(
        config.rpcUrl,
        config.chainId,
      )
      const eventProvider =
        config.eventRpcUrl === undefined
          ? baseProvider
          : new providers.StaticJsonRpcProvider(
              config.eventRpcUrl,
              config.chainId,
            )

      const etherscanClient = getExplorerClient(http, config.explorer, logger)
      let blobClient: BlobClient | undefined
      let celestiaApiClient: CelestiaApiClient | undefined

      const ethereumRpc = new RpcClient({
        url: config.rpcUrl,
        retryStrategy: 'SCRIPT',
        callsPerMinute: 60,
        sourceName: 'ethereum',
        logger,
        http,
      })

      if (config.beaconApiUrl) {
        blobClient = new BlobClient({
          beaconApiUrl: config.beaconApiUrl,
          logger,
          rpcClient: ethereumRpc,
          retryStrategy: 'SCRIPT',
          sourceName: 'beaconAPI',
          callsPerMinute: 60,
          http,
        })
      }

      if (config.celestiaApiUrl) {
        celestiaApiClient = new CelestiaApiClient({
          url: config.celestiaApiUrl,
          http,
          logger,
          sourceName: 'celestia-api',
          callsPerMinute: 300,
          retryStrategy: 'SCRIPT',
        })
      }

      this.config.set(config.name, {
        config,
        providers: {
          baseProvider,
          eventProvider,
          etherscanClient,
          blobClient,
          celestiaApiClient,
        },
      })
    }
  }

  getLatestBlockNumber(chain: string): Promise<number> {
    const config = this.config.get(chain)
    assert(config !== undefined, `Unknown chain: ${chain}`)
    return getBlockNumberTwoProviders(
      config.providers.baseProvider,
      config.providers.eventProvider,
    )
  }

  get(chain: string, blockNumber: number): IProvider {
    const config = this.config.get(chain)
    assert(
      config !== undefined,
      `Chain [${chain}] has not been configured or is missing .env variables.`,
    )

    const lowLevelProvider =
      this.lowLevelProviders.get(chain) ??
      new LowLevelProvider(
        config.providers.baseProvider,
        config.providers.eventProvider,
        config.providers.etherscanClient,
        config.providers.celestiaApiClient,
        config.providers.blobClient,
        this.logger,
      )
    this.lowLevelProviders.set(chain, lowLevelProvider)

    const reorgAwareCache = new ReorgAwareCache(
      this.discoveryCache,
      lowLevelProvider,
      chain,
    )

    const multicallClient =
      this.multicallClients.get(chain) ??
      new MulticallClient(lowLevelProvider, config.config.multicall)
    this.multicallClients.set(chain, multicallClient)

    const batchingAndCachingProvider =
      this.batchingAndCachingProviders.get(chain) ??
      new BatchingAndCachingProvider(
        reorgAwareCache,
        lowLevelProvider,
        multicallClient,
        this.logger,
      )
    this.batchingAndCachingProviders.set(chain, batchingAndCachingProvider)

    const chainKey = `${chain}:${blockNumber}`
    const provider =
      this.highLevelProviders.get(chainKey) ??
      new HighLevelProvider(
        this,
        batchingAndCachingProvider,
        chain,
        blockNumber,
      )
    this.highLevelProviders.set(chainKey, provider)

    return provider
  }

  getStats(chain: string): AllProviderStats {
    const highLevelMeasurements = [...this.highLevelProviders.keys()]
      .filter((key) => key.startsWith(chain))
      .map(
        (key) => this.highLevelProviders.get(key)?.stats ?? new ProviderStats(),
      )
      .reduce((a, b) => ProviderStats.add(a, b), new ProviderStats())

    return {
      highLevelMeasurements,
      cacheMeasurements:
        this.batchingAndCachingProviders.get(chain)?.stats ??
        new ProviderStats(),
      lowLevelMeasurements:
        this.lowLevelProviders.get(chain)?.stats ?? new ProviderStats(),
    }
  }
}
