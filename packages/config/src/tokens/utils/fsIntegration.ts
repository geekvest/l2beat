import { getDiscoveryPaths } from '@l2beat/discovery'
import type { ChainConverter } from '@l2beat/shared-pure'
import { readFileSync, writeFileSync } from 'fs'
import { type ParseError, parse } from 'jsonc-parser'
import groupBy from 'lodash/groupBy'
import path from 'path'
import { type GeneratedToken, Output, Source } from '../../../src/tokens/types'
import type { ScriptLogger } from './ScriptLogger'

export function readTokensFile(sourceFilePath: string, logger: ScriptLogger) {
  const sourceFile = readFileSync(sourceFilePath, 'utf-8')
  const errors: ParseError[] = []
  const parsed = parse(sourceFile, errors, {
    allowTrailingComma: true,
  }) as Record<string, string>
  if (errors.length > 0) console.error(errors)
  logger.assert(errors.length === 0, 'Cannot parse tokens.jsonc')
  const source = Source.parse(parsed)

  return source
}

export function readGeneratedFile(
  outputFilePath: string,
  logger: ScriptLogger,
) {
  const outputFile = readFileSync(outputFilePath, 'utf-8')
  try {
    const output = Output.parse(JSON.parse(outputFile))
    return output
  } catch (e) {
    console.error(e)
    logger.assert(false, 'Cannot parse generated.json')
  }
}

export function saveResults(outputFilePath: string, result: GeneratedToken[]) {
  const comment = 'This file was autogenerated. Please do not edit it manually.'
  const outputJson = JSON.stringify(
    {
      comment: comment,
      tokens: result,
    },
    null,
    2,
  )
  writeFileSync(outputFilePath, outputJson + '\n')
}

export function saveTokenNames(
  tokens: GeneratedToken[],
  chainConverter: ChainConverter,
) {
  const chains: Record<string, { names: Record<string, string> }> = {}
  const byChain = groupBy(tokens, (token) =>
    chainConverter.toName(token.chainId),
  )

  for (const chainName in byChain) {
    const chainTokens = byChain[chainName].filter(
      (token) => token.address !== undefined,
    )

    const occurrences: Record<string, number> = {}
    for (const { name } of chainTokens) {
      occurrences[name] = (occurrences[name] ?? 0) + 1
    }

    const counters: Record<string, number> = {}
    for (const token of chainTokens) {
      chains[chainName] ??= { names: {} }

      // biome-ignore lint/style/noNonNullAssertion: We know it's there
      const total = occurrences[token.name]!
      let finalName = token.name

      if (total > 1) {
        counters[token.name] = (counters[token.name] ?? 0) + 1
        finalName = `${token.name} ${counters[token.name]}`
      }

      if (!finalName.toLowerCase().includes('token')) {
        finalName += ' Token'
      }

      // biome-ignore lint/style/noNonNullAssertion: address checked above
      chains[chainName].names[token.address!] = finalName
    }
  }

  const paths = getDiscoveryPaths()
  writeFileSync(
    path.join(paths.discovery, 'globalTokens.jsonc'),
    JSON.stringify({ chains }, null, 2),
  )
}
