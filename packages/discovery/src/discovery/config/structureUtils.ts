import { ChainSpecificAddress, type EthereumAddress } from '@l2beat/shared-pure'
import merge from 'lodash/merge'
import { ConfigReader } from './ConfigReader'
import { getDiscoveryPaths } from './getDiscoveryPaths'
import { type StructureConfig, StructureContract } from './StructureConfig'

export function buildSharedModuleIndex(
  config: StructureConfig,
  configReader?: ConfigReader,
): Set<EthereumAddress> {
  const result = new Set<EthereumAddress>()
  configReader ??= new ConfigReader(getDiscoveryPaths().discovery)

  for (const sharedModule of config.sharedModules) {
    const discovery = configReader?.readDiscovery(sharedModule, config.chain)
    for (const entry of discovery.entries) {
      result.add(ChainSpecificAddress.address(entry.address))
    }
  }
  return result
}

export type StructureContractOverrides = StructureContract & {
  address: EthereumAddress
}

export type StructureContractConfig = StructureContractOverrides & {
  pushValues: (arg: StructureContract) => void
}

export function makeEntryStructureConfig(
  config: Pick<StructureConfig, 'overrides' | 'types'>,
  address: EthereumAddress,
): StructureContractConfig {
  const override =
    config.overrides?.[address.toString()] ?? StructureContract.parse({})

  const overrides = { address, ...override }

  const result = {
    ...overrides,
    types: merge({}, config.types ?? {}, overrides.types),
    pushValues: function (values: StructureContract) {
      const newState = {
        address: this.address,
        ...StructureContract.parse(merge({}, values, this)),
      }
      Object.assign(this, newState)
    },
  }
  return result
}
