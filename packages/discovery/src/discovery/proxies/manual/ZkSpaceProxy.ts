import type { EthereumAddress } from '@l2beat/shared-pure'
import type { IProvider } from '../../provider/IProvider'
import { get$Implementations } from '../../utils/extractors'
import { detectEip1967Proxy } from '../auto/Eip1967Proxy'
import type { ProxyDetails } from '../types'

export async function getZkSpaceProxy(
  provider: IProvider,
  address: EthereumAddress,
): Promise<ProxyDetails | undefined> {
  const detection = await detectEip1967Proxy(provider, address)
  if (!detection || detection.type !== 'EIP1967 proxy') {
    return undefined
  }

  const zkSea = await provider.callMethod<EthereumAddress>(
    address,
    'function zkSeaAddress() view returns (address)',
    [],
  )

  const zkSyncCommitBlock = await provider.callMethod<EthereumAddress>(
    address,
    'function zkSyncCommitBlockAddress() view returns (address)',
    [],
  )

  const zkSyncExit = await provider.callMethod<EthereumAddress>(
    address,
    'function zkSyncExitAddress() view returns (address)',
    [],
  )

  const additional = [zkSea, zkSyncCommitBlock, zkSyncExit]
  if (additional.some((a) => a === undefined)) {
    throw new Error('zkSpace proxy: missing additional addresses')
  }

  return {
    type: 'zkSpace proxy',
    values: {
      $admin: detection.values.$admin,
      $implementation: get$Implementations(detection.values)
        .concat((additional ?? []) as EthereumAddress[])
        .map((i) => i.toString()),
    },
  }
}
