import { Card } from "@/components/common/card"
import FeedCard from "@/components/feed/card"
import { loadSessionRequest } from "@/redux/sessions/action-reducer"
import { StateType } from "@/types/state.type"
import { Spinner } from "@phosphor-icons/react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import { useDispatch, useSelector } from "react-redux"

export default function SessionPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { id: sessionId } = router.query

  const { isLoading, selectedSession } = useSelector((state: StateType) => state.sessions)

  useEffect(() => {
    if (!sessionId) return
    dispatch(loadSessionRequest(sessionId as string))
  }, [sessionId, dispatch])

  if (isLoading && !selectedSession?.id) {
    return (
      <Card.wrapper>
        <Skeleton width={'40%'} />
        <Skeleton width={'20%'} />
        <Card.body>
          <div className='flex justify-between'>
            <div>
              <Skeleton width={96} height={96} />
              <Skeleton width={'60%'} />
            </div>
            <div>
              <Skeleton width={96} height={96} />
              <Skeleton width={'55%'} />
            </div>
          </div>
        </Card.body>
      </Card.wrapper>
    )
  }

  if (!selectedSession?.id) {
    return <p>Session not found</p>
  }

  return (
    <div>
      <FeedCard
        session={selectedSession}
        className='flex flex-col gap-3 p-3'
      />
    </div>
  )
}