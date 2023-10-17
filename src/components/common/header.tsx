import { useDispatch, useSelector } from "react-redux";
import Avatar from "./avatar";
import { StateType } from "@/types/state.type";
import { loginSuccess } from "@/redux/auth/action-reducer";
import { getUser } from "@/utils/local-storage.service";
import { useEffect } from "react";
import Link from "next/link";
import { Bell, TennisBall } from "@phosphor-icons/react";

export default function Header() {
  const { user } = useSelector((state: StateType) => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      const user = getUser()
      if (user) {
        dispatch(loginSuccess(user))
      }
    }
  }, [user, dispatch])

  return (
    <div className='flex justify-between pt-6 pl-4 pr-4 pb-2 border-b b-slate-300'>
      <span className='flex items-center gap-0.5 text-lg font-medium'>
        <TennisBall className='text-green-500' weight="duotone" size={24} />
        CourtSpin
      </span>
      <Link href={'/notifications'}>
        <Bell size={20} weight='duotone' className='mt-1' />
      </Link>
    </div>
  )
}