import Avatar from "@/components/common/avatar"
import { Card } from "@/components/common/card"
import FeedCard from "@/components/feed/card"
import { loadSessionRequest } from "@/redux/sessions/action-reducer"
import { StateType } from "@/types/state.type"
import { getUsersByModality } from "@/utils/common"
import { MODALITY } from "@/utils/constants"
import { Plus } from "@phosphor-icons/react"
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

  const renderUserPlaceHolders = (numOfUsers: number, modality: MODALITY) => {
    const totalUsers = getUsersByModality(modality)
    const remainingUsers = totalUsers - numOfUsers

    const output = []
    for (let i = 0; i < remainingUsers; i++) {
      output.push(
        <button 
          key={i} 
          onClick={() => alert('add')}
          className='flex justify-center items-center w-24 h-24 bg-white border border-gray-300 border-dashed rounded'
        >
          <Plus size={24} />
        </button>
      )
    }

    return output
  }

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