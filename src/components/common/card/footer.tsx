import { ReactNode } from "react";

export default function CardFooter({ children }: { children: ReactNode }) {
  return (
    <div className='card'>
      {children}
    </div>
  )
}