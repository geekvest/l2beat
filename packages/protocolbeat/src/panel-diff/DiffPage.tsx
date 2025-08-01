import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getFlatSource } from '../api/api'
import { ErrorState } from '../components/ErrorState'
import { DiffView } from '../components/editor/diff/DiffView'
import { LoadingState } from '../components/LoadingState'

export function DiffPage() {
  const { address1, address2 } = useParams()
  if (!address1 || !address2) {
    throw new Error('Cannot use component outside of project page!')
  }

  const response = useQuery({
    queryKey: ['flat-source', address1, address2],
    queryFn: async () => {
      return await Promise.all([
        getFlatSource(address1),
        getFlatSource(address2),
      ] as const)
    },
  })

  if (response.isPending) {
    return <LoadingState />
  }

  if (response.isError) {
    return <ErrorState />
  }

  const [leftCode, rightCode] = response.data
  return (
    <DiffView
      leftAddress={address1}
      leftCode={leftCode}
      rightAddress={address2}
      rightCode={rightCode}
    />
  )
}
