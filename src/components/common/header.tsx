import { useDispatch, useSelector } from "react-redux";
import Avatar from "./avatar";
import { StateType } from "@/types/state.type";
import { loginSuccess } from "@/redux/auth/action-reducer";
import { getUser } from "@/utils/local-storage.service";
import { useEffect } from "react";

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
      <span className='text-lg font-medium'>CourtSpin</span>
      {/* <Avatar w={6} h={6} /> */}
      {user && (
        <>
          {user.firstName}
        </>
      )}
    </div>
  )
}