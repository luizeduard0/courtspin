import { requestRequests } from "@/redux/sessions/action-reducer"
import { StateType } from "@/types/state.type"
import { ArrowCircleRight } from "@phosphor-icons/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import { useDispatch, useSelector } from "react-redux"

export default function SessionsPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [shouldReload, setShouldReload] = useState<boolean>(true)
  const { isLoading, requests } = useSelector((state: StateType) => state.sessions)

  const loadRequests = () => {
    dispatch(requestRequests())
  }

  const goToSession = (sessionId: string) => {
    router.push(`/sessions/${sessionId}`)
  }

  useEffect(() => {
    if (!shouldReload) return

    loadRequests()
    setShouldReload(false)
  }, [shouldReload])

  const renderLoading = () => {
    const output = []
    for (let i = 0; i < 3; i++) {
      output.push(
        <div key={`loading-${i}`}>
          <div
            className='flex justify-between mt-4 px-4 py-2 border-b border-gray-100'
          >
            <div className='flex flex-col w-screen'>
              <strong className='text-sm'><Skeleton width={'70%'} /></strong>
              <span className='text-xs text-gray-400'><Skeleton width={'20%'} /></span>
            </div>
            <div className='flex gap-2 items-center'>
              <Skeleton width={70} />
              <Skeleton width={20} />
            </div>
          </div>
        </div>
      )
    }

    return output
  }

  if (isLoading) {
    return renderLoading()
  }

  return (
    <div>
      <h2 className='text-2xl px-4 py-4'>My Requests</h2>

      <ul>
        {requests.map(request => (
          <li
            key={request.id}
            className='flex justify-between mt-4 px-4 py-2 border-b border-gray-100'
            onClick={() => goToSession(request.id)}
          >
            <div className='flex flex-col'>
              <strong className='text-sm'>{request.sessionType}</strong>
              <span className='text-xs text-gray-400'>{request.modality}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <div>
                <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                  <svg className="h-1.5 w-1.5 fill-yellow-500" viewBox="0 0 6 6" aria-hidden="true">
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  {request.status}
                </span>
              </div>
              <ArrowCircleRight weight='duotone' size={20} className='text-gray-400' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}