import Avatar from "@/components/common/avatar"
import { Card } from "@/components/common/card"
import FeedCard from "@/components/feed/card"
import { requestInbox } from "@/redux/inbox/action-reducer"
import { StateType } from "@/types/state.type"
import { useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import { useDispatch, useSelector } from "react-redux"

export default function InboxPage() {
  const dispatch = useDispatch()
  const { isLoading, sessions } = useSelector((state: StateType) => state.inbox)

  const loadInbox = () => {
    dispatch(requestInbox())
  }

  useEffect(() => {
    if (!sessions.length) {
      loadInbox()
    }
  }, [sessions])

  if (isLoading && !sessions.length) {
    return (
      <div className='bg-gray-50 h-screen'>
        <div className='flex gap-1 flex-col'>
          {[...Array(10)].map((x, y) => (
            <Card.wrapper key={y}>
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
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='bg-gray-50 h-screen'>
      <div className='flex gap-1 flex-col pb-20'>
        {sessions.map((session, index) => (
          <FeedCard
            key={index}
            session={session}
          />
        ))}
      </div>
    </div>
  )
}