import Avatar from "@/components/common/avatar"
import { Card } from "@/components/common/card"
import FeedCard from "@/components/feed/card"
import { requestInbox } from "@/redux/inbox/action-reducer"
import { StateType } from "@/types/state.type"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function InboxPage() {
  const dispatch = useDispatch()
  const { sessions } = useSelector((state: StateType) => state.inbox)

  const loadInbox = () => {
    dispatch(requestInbox())
  }

  useEffect(() => {
    if(!sessions.length) {
      loadInbox()
    }
  }, [sessions])

  return (
    <div className='bg-gray-50 h-screen'>
      <div className='flex gap-1 flex-col'>
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