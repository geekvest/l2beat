import type { Milestone } from '@l2beat/config'
import { ProjectCostsChart } from '~/components/chart/costs/ProjectCostsChart'
import { HorizontalSeparator } from '~/components/core/HorizontalSeparator'
import type { TrackedTransactionsByType } from '~/utils/project/tracked-txs/getTrackedTransactions'
import { ProjectSection } from '../ProjectSection'
import type { ProjectSectionProps } from '../types'
import { TrackedTransactions } from './TrackedTransactions'

export interface CostsSectionProps extends ProjectSectionProps {
  projectId: string
  milestones: Milestone[]
  trackedTransactions: TrackedTransactionsByType
}

export function CostsSection({
  projectId,
  milestones,
  trackedTransactions,
  ...sectionProps
}: CostsSectionProps) {
  return (
    <ProjectSection {...sectionProps}>
      <p className="text-base">
        The section shows the operating costs that L2s pay to Ethereum.
      </p>
      <HorizontalSeparator className="my-4" />
      <ProjectCostsChart milestones={milestones} projectId={projectId} />
      <HorizontalSeparator className="my-4" />
      <TrackedTransactions {...trackedTransactions} />
    </ProjectSection>
  )
}
