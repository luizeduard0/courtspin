import { UserCircle } from "@phosphor-icons/react"
import Image from "next/image"

export default function Avatar({ avatar = undefined, w = 8, h = 8, className='rounded-full' }: { avatar?: string | undefined, w?: number, h?: number, className?: string }) {
  if (avatar) {
    return (
      <Image
        src={avatar}
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
      <UserCircle width={w} height={h} className='text-gray-300' />
    </div>
  )
}