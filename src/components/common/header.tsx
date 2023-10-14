import Avatar from "./avatar";

export default function Header() {
  return (
    <div className='flex justify-between pt-6 pl-4 pr-4 pb-2 border-b b-slate-300'>
      <span className='text-lg font-medium'>CourtSpin</span>
      <Avatar w={6} h={6} />
    </div>
  )
}