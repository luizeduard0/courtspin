import Avatar from "@/components/common/avatar"
import { Card } from "@/components/common/card"
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

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!selectedSession?.id) {
    return <p>Session not found</p>
  }

  return (
    <div className='p-2'>
      <Card.wrapper>
        <Card.header
          title={`${selectedSession.modality} ${selectedSession.sessionType}`}
          location={selectedSession.location}
        />
        <Card.body>
          <div className='flex justify-between'>
            {selectedSession?.sessionUser?.map(sessionUser => (
              <div key={sessionUser.user.id}>
                <Avatar 
                  avatar={sessionUser.user.avatar} 
                  w={96} h={96} 
                  className='bg-gray-200 rounded' 
                />
                {/* <div className='w-24 h-24 bg-gray-200 rounded'></div> */}
                <h3 className='leading-none mt-1'>{sessionUser.user.firstName}</h3>
                <span className='leading-none text-sm text-gray-400'>NTRP {sessionUser.user.ntrp || '-'}</span>
              </div>
            ))}
          </div>
        </Card.body>
      </Card.wrapper>
    </div>
  )
}