import { Button, buttonVariants } from '~/components/core/Button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '~/components/core/Drawer'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/core/tooltip/Tooltip'
import { GrissiniCell } from '~/components/rosette/grissini/GrissiniCell'
import { GrissiniDetails } from '~/components/rosette/grissini/GrissiniDetails'
import { GrissiniIcon } from '~/components/rosette/grissini/GrissiniIcon'
import { NoBridgeGrissiniDetailsPlaceholder } from '~/components/rosette/grissini/NoBridgeGrissiniDetailsPlaceholder'
import { useRouter } from '~/hooks/useRouter'
import { InfoIcon } from '~/icons/Info'
import { UnverifiedIcon } from '~/icons/Unverified'
import { UNVERIFIED_DA_CLASSNAME } from '~/pages/data-availability/summary/components/table/DaSummaryPublicTable'
import { ProjectsUsedIn } from '~/pages/data-availability/summary/components/table/ProjectsUsedIn'
import type { DaProjectPageEntry } from '~/server/features/data-availability/project/getDaProjectEntry'
import { cn } from '~/utils/cn'
import { formatCurrency } from '~/utils/number-format/formatCurrency'

interface Props {
  project: DaProjectPageEntry
}

export function MultipleBridgeDetails({ project }: Props) {
  const router = useRouter()

  return (
    <div className="flex flex-row items-end gap-10 pt-4 md:py-0">
      {/* Left side (table with title and banner) */}
      <div className="flex flex-1 flex-col gap-4">
        <div className="whitespace-pre text-secondary text-xs uppercase">
          Select a bridge
        </div>
        <div className="hidden flex-row items-center gap-2 rounded-md border border-blue-500 bg-blue-400 px-3 py-2 font-medium text-blue-700 text-xs md:flex lg:px-6 dark:text-blue-700">
          <InfoIcon className="size-4 shrink-0 fill-current dark:fill-current" />
          Please select one of the available DA bridges to view its risks and
          detailed analysis.
        </div>
        <div className="flex flex-col rounded-lg bg-header-secondary lg:h-[278px]">
          <div className="hidden flex-row gap-4 rounded-t-lg border-divider bg-surface-secondary px-4 py-2 font-semibold text-secondary text-xs uppercase md:flex md:border-b">
            <div className="w-12" />
            <div className="flex-1">DA Bridge</div>
            <div className="flex-1 text-center">DA Risks</div>
            <div className="flex-1 pr-12 text-right">TVS</div>
            <div className="flex-[1.5] lg:flex-1">Used by</div>
          </div>
          <div className="flex flex-1 flex-col gap-2 overflow-y-auto rounded-lg max-md:bg-header-secondary md:gap-0 md:rounded-t-none">
            {project.bridges.map((bridge, index) => (
              <label
                key={bridge.slug}
                htmlFor={bridge.slug}
                className={cn(
                  'flex min-h-[56px] cursor-pointer flex-row gap-4 rounded-lg border-divider px-4 py-2 md:rounded-none md:border-b',
                  index === project.bridges.length - 1 && 'md:border-b-0',
                  // Hide 3rd and further bridges on mobile (will be shown in a drawer)
                  index > 2 && 'max-md:hidden',
                  index === 0 && 'md:rounded-t-none',
                  bridge.verificationWarning
                    ? UNVERIFIED_DA_CLASSNAME
                    : 'bg-surface-secondary md:bg-transparent',
                )}
              >
                <RadioButton
                  id={bridge.slug}
                  value={bridge.slug}
                  checked={bridge.slug === project.selectedBridge.slug}
                  onChange={() => {
                    router.push(
                      `/data-availability/projects/${project.slug}/${bridge.slug}`,
                    )
                  }}
                />

                <div className="flex flex-1 items-center gap-1 font-bold text-primary text-sm">
                  {bridge.name}
                  {bridge.verificationWarning && (
                    <Tooltip>
                      <TooltipTrigger>
                        <UnverifiedIcon className="size-3.5 fill-red-300 md:size-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        This bridge contains unverified contracts.
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <GrissiniCell values={bridge.grissiniValues} />
                </div>
                <div className="flex flex-1 items-center justify-end pr-1 font-bold text-primary text-sm md:pr-12">
                  {formatCurrency(bridge.tvs, 'usd')}
                </div>
                <div className="hidden flex-[1.5] flex-row items-center md:flex lg:flex-1">
                  {bridge.usedIn.length > 0 ? (
                    <ProjectsUsedIn
                      className="h-5 justify-start"
                      usedIn={bridge.usedIn}
                      maxProjects={4}
                    />
                  ) : (
                    <Tooltip>
                      <TooltipTrigger>
                        <span className="font-medium text-sm">No L2 😔</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        There are no scaling projects listed on L2BEAT that use
                        this solution.
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </label>
            ))}
            <div
              className={cn(
                'md:hidden',
                // Show "View all bridges" button if there are more than 3 bridges
                project.bridges.length < 3 && 'hidden',
              )}
            >
              <Drawer>
                <DrawerTrigger
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'w-full py-3.5',
                  )}
                >
                  View all bridges
                </DrawerTrigger>
                <DrawerContent className="bg-pure-white dark:bg-pure-black">
                  <div className="mb-2 font-semibold text-lg text-zinc-800 dark:text-zinc-300">
                    Select bridge
                  </div>
                  <div>
                    {project.bridges.map((bridge) => (
                      <label
                        key={bridge.slug}
                        htmlFor={bridge.slug}
                        className="flex cursor-pointer flex-row items-center gap-2 border-gray-200 border-b py-3 dark:border-zinc-700"
                      >
                        <RadioButton
                          id={bridge.slug}
                          value={bridge.slug}
                          checked={bridge.slug === project.selectedBridge.slug}
                          onChange={() => {
                            router.push(
                              `/data-availability/projects/${project.slug}/${bridge.slug}`,
                            )
                          }}
                        />
                        <div className="flex-1 font-semibold text-sm text-zinc-800 dark:text-zinc-300">
                          {bridge.name}
                        </div>
                        <div>
                          <GrissiniIcon values={bridge.grissiniValues} />
                        </div>
                      </label>
                    ))}
                  </div>
                  <DrawerFooter className="flex flex-row justify-center pt-6">
                    <DrawerClose asChild>
                      <Button className="bg-transparent text-sm text-zinc-500 underline dark:bg-transparent">
                        Close
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>

      {/* Right side (Grissini details) */}
      <div className="hidden w-full max-w-[264px] flex-col space-y-4 pt-3 lg:flex">
        <div className="whitespace-pre text-secondary text-xs">
          {project.selectedBridge.name} risks
        </div>

        {project.selectedBridge.isNoBridge ? (
          <NoBridgeGrissiniDetailsPlaceholder />
        ) : (
          <GrissiniDetails
            values={project.header.daBridgeGrissiniValues}
            descriptionAsTooltip
            info="compact"
          />
        )}
      </div>
    </div>
  )
}

function RadioButton({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <div className="grid place-items-center px-1 md:px-3">
      <input
        type="radio"
        name="bridge"
        className={cn(
          'peer relative col-start-1 row-start-1 aspect-square size-5 cursor-pointer',
          'appearance-none rounded-full border-2 border-divider bg-pure-white checked:border-brand dark:bg-pure-black',
          className,
        )}
        {...props}
      />
      <div className="z-2 col-start-1 row-start-1 hidden aspect-square size-3 rounded-full bg-brand peer-checked:block " />
    </div>
  )
}
