import type { EthereumAddress } from '@l2beat/shared-pure'

import type { StructureContractField } from '../config/StructureConfig'
import type { HandlerResult } from '../handlers/Handler'
import { toAddressArrayPrivate } from '../utils/extractors'
import type { AddressesWithTemplates } from './AddressAnalyzer'

export function getRelativesWithSuggestedTemplates(
  parameters: HandlerResult[],
  ignoredFields?: string[],
  ignoredAddresses?: EthereumAddress[],
  fields?: { [field: string]: StructureContractField },
): AddressesWithTemplates {
  const result: AddressesWithTemplates = {}
  for (const param of parameters) {
    if (param.ignoreRelative || ignoredFields?.includes(param.field)) {
      continue
    }
    const addresses = toAddressArrayPrivate(param.value).filter(
      (address) => !ignoredAddresses?.includes(address),
    )
    const template = fields?.[param.field]?.template ?? undefined
    for (const address of addresses) {
      const curTemplates = result[address.toString()] ?? new Set()
      result[address.toString()] = curTemplates

      if (template !== undefined) {
        curTemplates.add(template)
      }
    }
  }

  return result
}
