import { Bell, House, Student, TennisBall } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter()

  const menu = [
    {
      label: 'Home',
      url: '/inbox',
      icon: <House size={20} />
    },
    {
      label: 'Play',
      url: '/play',
      icon: <TennisBall size={20} />
    },
    {
      label: 'Learn',
      url: '/learn',
      icon: <Student size={20} />
    },
    {
      label: 'Notifications',
      url: '/notifications',
      icon: <Bell size={20} />
    },
  ]

  return (
    <nav className='fixed bottom-0 flex gap-2 justify-between bg-white border-t border-slate-300 w-full pt-2 px-2 pb-6 z-50'>
      {menu.map(nav => (
        <Link 
          key={nav.url} 
          href={nav.url}
          className={`
            ${router.pathname == nav.url ? 'text-blue-500 bg-blue-50' : ''}
            flex flex-col items-center text-xs w-full rounded-lg px-2 py-1
          `}
        >
          {nav.icon}
          {nav.label}
        </Link>
      ))}
    </nav>
  )
}