import type { WarningWithSentiment } from '@l2beat/config'
import { RoundedWarningIcon } from '~/icons/RoundedWarning'
import { formatPercent } from '~/utils/calculatePercentageChange'
import { cn } from '~/utils/cn'
import { languageJoin } from '~/utils/languageJoin'
import { Square } from '../Square'
import { sentimentToWarningBarColor, WarningBar } from '../WarningBar'
import { Breakdown } from './Breakdown'

export interface TokenBreakdownProps {
  total: number
  associated: number
  ether: number
  stablecoin: number
  className?: string
}

export interface TokenBreakdownTooltipContentProps extends TokenBreakdownProps {
  associatedTokenSymbols: string[]

  tvsWarnings: WarningWithSentiment[]
}

export function TokenBreakdown(props: TokenBreakdownProps) {
  const other = props.total - props.associated - props.ether - props.stablecoin
  const values = [
    {
      value: props.associated,
      className: 'dark:bg-rose-700 bg-rose-500',
    },
    {
      value: props.ether,
      className: 'dark:bg-green-200 bg-green-900',
    },
    { value: props.stablecoin, className: 'dark:bg-teal-400 bg-teal-500' },
    { value: other, className: 'bg-sky-600' },
  ]

  return (
    <Breakdown values={values} className={cn('opacity-80', props.className)} />
  )
}

export function TokenBreakdownTooltipContent({
  total,
  associated,
  ether,
  stablecoin,
  associatedTokenSymbols,
  tvsWarnings,
}: TokenBreakdownTooltipContentProps) {
  const other = total - associated - ether - stablecoin
  const values = [
    {
      title: languageJoin(associatedTokenSymbols) ?? 'Associated',
      value: associated,
      variant: 'associated' as const,
    },
    {
      title: 'ETH & derivatives',
      value: ether,
      variant: 'ether' as const,
    },
    {
      title: 'Stablecoins',
      value: stablecoin,
      variant: 'stable' as const,
    },
    { title: 'Other', value: other, variant: 'other' as const },
  ]

  return (
    <div className="space-y-2 max-md:max-w-xs">
      {total === 0 ? (
        <span>No tokens</span>
      ) : (
        <div className="flex flex-col gap-2">
          {values.map(
            (v, i) =>
              v.value > 0 && (
                <div
                  key={i}
                  className="flex items-center justify-between gap-x-6"
                >
                  <span className="flex items-center gap-1">
                    <Square variant={v.variant} size="small" />
                    <span className="font-medium text-label-value-14">
                      {v.title}
                    </span>
                  </span>
                  <span className="font-medium text-label-value-15">
                    {formatPercent(v.value / total)}
                  </span>
                </div>
              ),
          )}
        </div>
      )}
      {tvsWarnings?.map((warning, i) => (
        <WarningBar
          key={`tvs-warning-${i}`}
          icon={RoundedWarningIcon}
          text={warning.value}
          color={sentimentToWarningBarColor(warning.sentiment)}
          // Cell itself is a href.
          // Markdown might contain links - nesting them in a tooltip
          // breaks semantics apart causing significant layout shifts.
          ignoreMarkdown
        />
      ))}
    </div>
  )
}
