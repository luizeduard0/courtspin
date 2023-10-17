import { User } from "@/models/user"
import { UserCircle } from "@phosphor-icons/react"
import Image from "next/image"

export default function Avatar({ user, w = 8, h = 8, className='rounded-full' }: { user?: any | null, w?: number | string, h?: number | string, className?: string }) {
  if (user && user.avatar) {
    return (
      <Image
        src={user.avatar}
        width={w}
        height={h}
        className={className}
        style={{
          width: `${w}px`,
          height: `${h}px`,
        }}
        alt='avatar'
      />
    )
  }

  return (
    <div className={className}>
      <UserCircle width={w} height={h} className={user?.id ? 'text-blue-800' : 'text-gray-500'} weight="duotone" />
    </div>
  )
}