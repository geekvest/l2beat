import type { Milestone } from '@l2beat/config'
import { useMemo, useState } from 'react'
import { TvsChartUnitControls } from '~/components/chart/tvs/TvsChartUnitControls'
import { TvsBreakdownButton } from '~/components/projects/sections/StackedTvsSection'
import { TokenCombobox } from '~/components/TokenCombobox'
import type {
  ProjectToken,
  ProjectTokens,
} from '~/server/features/scaling/tvs/tokens/getTokensForProject'
import type { TvsChartRange } from '~/server/features/scaling/tvs/utils/range'
import { api } from '~/trpc/React'
import { ChartControlsWrapper } from '../../../core/chart/ChartControlsWrapper'
import { ProjectChartTimeRange } from '../../../core/chart/ChartTimeRange'
import { getChartRange } from '../../../core/chart/utils/getChartRangeFromColumns'
import type { ChartUnit } from '../../types'
import { ProjectTokenChart } from '../ProjectTokenChart'
import { TvsChartTimeRangeControls } from '../TvsChartTimeRangeControls'
import { StackedTvsChart } from './StackedTvsChart'

interface Props {
  milestones: Milestone[]
  projectId: string
  tokens: ProjectTokens | undefined
  tvsBreakdownUrl?: string
}

export function ProjectStackedTvsChart({
  milestones,
  projectId,
  tokens,
  tvsBreakdownUrl,
}: Props) {
  const [token, setToken] = useState<ProjectToken>()
  const [timeRange, setTimeRange] = useState<TvsChartRange>('1y')
  const [unit, setUnit] = useState<ChartUnit>('usd')

  if (tokens && token) {
    return (
      <ProjectTokenChart
        isBridge={false}
        tokens={tokens}
        setToken={setToken}
        token={token}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        unit={unit}
        setUnit={setUnit}
        milestones={milestones}
        projectId={projectId}
        tvsBreakdownUrl={tvsBreakdownUrl}
        showStackedChartLegend
      />
    )
  }

  return (
    <DefaultChart
      projectId={projectId}
      milestones={milestones}
      timeRange={timeRange}
      setTimeRange={setTimeRange}
      tokens={tokens}
      token={token}
      setToken={setToken}
      unit={unit}
      setUnit={setUnit}
      tvsBreakdownUrl={tvsBreakdownUrl}
    />
  )
}

interface DefaultChartProps {
  projectId: string
  milestones: Milestone[]
  timeRange: TvsChartRange
  setTimeRange: (timeRange: TvsChartRange) => void
  tokens: ProjectTokens | undefined
  token: ProjectToken | undefined
  setToken: (token: ProjectToken | undefined) => void
  unit: ChartUnit
  setUnit: (unit: ChartUnit) => void
  tvsBreakdownUrl: string | undefined
}

function DefaultChart({
  projectId,
  milestones,
  timeRange,
  setTimeRange,
  tokens,
  token,
  setToken,
  unit,
  setUnit,
  tvsBreakdownUrl,
}: DefaultChartProps) {
  const { data, isLoading } = api.tvs.chart.useQuery({
    filter: { type: 'projects', projectIds: [projectId] },
    range: { type: timeRange },
    excludeAssociatedTokens: false,
  })

  const chartData = useMemo(
    () =>
      data?.map(([timestamp, native, canonical, external, ethPrice]) => {
        const divider = unit === 'usd' ? 1 : ethPrice
        return {
          timestamp,
          native: native / divider,
          canonical: canonical / divider,
          external: external / divider,
        }
      }),
    [data, unit],
  )
  const chartRange = useMemo(() => getChartRange(chartData), [chartData])

  return (
    <section className="flex flex-col">
      <ChartControlsWrapper>
        <ProjectChartTimeRange range={chartRange} />
        <TvsChartTimeRangeControls
          projectSection
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />
      </ChartControlsWrapper>
      <StackedTvsChart
        data={chartData}
        milestones={milestones}
        unit={unit}
        isLoading={isLoading}
        className="mt-4 mb-2"
      />
      <div className="flex flex-wrap items-center justify-between gap-1">
        <TvsChartUnitControls unit={unit} setUnit={setUnit}>
          {tokens && (
            <TokenCombobox
              tokens={tokens}
              value={token}
              setValue={setToken}
              isBridge={false}
            />
          )}
        </TvsChartUnitControls>
        {tvsBreakdownUrl && (
          <div className="hidden md:inline-block">
            <TvsBreakdownButton tvsBreakdownUrl={tvsBreakdownUrl} />
          </div>
        )}
      </div>
    </section>
  )
}
