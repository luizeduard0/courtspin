import { UserCircle } from "@phosphor-icons/react"
import Image from "next/image"

export default function Avatar({ avatar = undefined, w = 8, h = 8 }: { avatar?: string | undefined, w?: number, h?: number }) {
  if (avatar) {
    return (
      <Image
        src={avatar}
        width={w}
        height={h}
        className='rounded-full'
        style={{
          width: `${w}px`,
          height: `${h}px`,
        }}
        alt='avatar'
      />
    )
  }

  return <UserCircle width={w} height={h} className='text-gray-500' />
}