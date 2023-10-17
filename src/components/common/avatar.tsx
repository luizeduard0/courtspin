/* eslint-disable @next/next/no-img-element */
import { UserCircle } from "@phosphor-icons/react"

export default function Avatar({ user, w = 8, h = 8, className = 'rounded-full' }: { user?: any | null, w?: number | string, h?: number | string, className?: string }) {
  if (user && user.avatar) {
    return (
      <div
        className='bg-gray-100 rounded-full'
        style={{
          maxWidth: `${w}`,
          height: `${h}`,
        }}
      >
        <img
          src={user.avatar}
          width={w}
          height={h}
          className={className}
          style={{
            maxWidth: `${w}`,
            height: `${h}`,
          }}
          alt='avatar'
        />
      </div>
    )
  }

  return (
    <div className={className}>
      <UserCircle width={w} height={h} className={user?.id ? 'text-blue-800' : 'text-gray-500'} weight="duotone" />
    </div>
  )
}