import { ReactNode } from "react";

export default function CardBody({ children }: { children: ReactNode }) {
  return (
    <div className='card'>
      {children}
    </div>
  )
}