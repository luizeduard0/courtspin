import Link from "next/link";

export default function Profile() {
  return (
    <ul className='p-10'>
      <li><Link href='/auth/logout'>Sair</Link></li>
    </ul>
  )
}