import FeedCard from "@/components/feed/card"
import { loadSessionRequest } from "@/redux/sessions/action-reducer"
import { StateType } from "@/types/state.type"
import { useRouter } from "next/router"
import { useEffect } from "react"
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
    return <p>Loading...</p>
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