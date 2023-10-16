import { Session, SessionUser } from "@/models/session";
import { getUsersByModality } from "@/utils/common";
import { MODALITY } from "@/utils/constants";
import { Plus } from "@phosphor-icons/react";
import Avatar from "../common/avatar";
import { Card } from "../common/card";
import { FeedCardProps } from "@/types/props-types/feed-card.type";
import { useDispatch } from "react-redux";
import { requestJoinSession } from "@/redux/sessions/action-reducer";
import { getUser } from "@/utils/local-storage.service";

export default function FeedCard({ session, className = undefined }: FeedCardProps) {
  const dispatch = useDispatch()
  const user = getUser()

  const handleJoin = () => {
    dispatch(requestJoinSession(session.id))
  }

  const renderUserPlaceHolders = (users: SessionUser[], modality: MODALITY) => {
    const totalUsers = getUsersByModality(modality)
    const remainingUsers = totalUsers - users.length
    const hasJoined = users.find(u => u.user.id == user.id)

    const output = []
    for (let i = 0; i < remainingUsers; i++) {
      output.push(
        <button
          key={i}
          onClick={handleJoin}
          className={`
            flex justify-center items-center w-24 h-24 bg-white border border-gray-300 border-dashed rounded
            ${!!hasJoined ? 'text-gray-300' : ''}
          `}
          disabled={!!hasJoined || false}
        >
          <Plus size={24} />
        </button>
      )
    }
    return output
  }

  return (
    <Card.wrapper className={className}>
      <Card.header
        title={`${session.modality} ${session.sessionType}`}
        location={session.location}
      />
      <Card.body>
        <div className='flex justify-between'>
          {session?.sessionUser?.map(sessionUser => (
            <div key={sessionUser.user.id}>
              <Avatar
                avatar={sessionUser.user.avatar}
                w={96} h={96}
                className='bg-gray-200 rounded-lg'
              />
              <h3 className='leading-none mt-1'>{sessionUser.user.firstName}</h3>
              <span className='leading-none text-sm text-gray-400'>NTRP {sessionUser.user.ntrp || '-'}</span>
            </div>
          ))}
          {renderUserPlaceHolders((session?.sessionUser || []), session?.modality)}
        </div>
      </Card.body>
    </Card.wrapper>
  )
}