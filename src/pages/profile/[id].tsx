import Avatar from "@/components/common/avatar";
import { User } from "@/models/user";
import ApiService from "@/utils/api.service";
import { getUser } from "@/utils/local-storage.service";
import { ArchiveBox, Clock, DoorOpen, TennisBall } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Profile() {
  const router = useRouter()
  const { id } = router.query
  const [profile, setProfile] = useState<User | undefined>()

  const loadUser = async (id: string) => {
    try {
      const userProfile = await ApiService.callGet(`/user/profile/${id}`, {})
      setProfile(userProfile as any)
    } catch (e) {

    }
  }

  useEffect(() => {
    if (!id) return

    if(id === 'me') {
      const user = getUser()
      setProfile(user)
    }

    loadUser(id as string)
  }, [id])

  return (
    <div className=''>
      <div className='flex items-center gap-2 p-2 pt-6'>
        <Avatar user={profile} w={56} h={56} />
        <h2 className='text-xl w-full'>
          {profile ? `${profile.firstName} ${profile.lastName}` : <Skeleton />}
          <small className='flex gap-2 text-gray-500 text-sm'>
            {profile ? `${profile.location}` : <Skeleton width={80} />} &bull; {profile ? `NTRP ${profile.ntrp}` : <Skeleton width={40} />}
          </small>
        </h2>
      </div>
      {id == 'me' && (
        <ul className='pt-10'>
          <li className='border-b border-gray-200 px-5 py-4'>
            <Link href='/sessions' className='flex gap-3 items-center'>
              <ArchiveBox weight='duotone' className='text-gray-500' size={20} />
              My Requests
            </Link>
          </li>
          <li className='border-b border-gray-200 px-5 py-4'>
            <Link href='/sessions' className='flex gap-3 items-center'>
              <TennisBall weight='duotone' className='text-gray-500' size={20} />
              Sessions
            </Link>
          </li>
          <li className='border-b border-gray-200 px-5 py-4'>
            <Link href='/auth/logout' className='flex gap-3 items-center'>
              <DoorOpen weight='duotone' className='text-gray-500' size={20} />
              Logout
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}