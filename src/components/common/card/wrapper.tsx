import { ReactNode } from "react";

export default function CardWrapper(
  { children, className='flex flex-col gap-3 p-3 border border-slate-300 rounded shadow' }: 
  { children: ReactNode, className?: string }
) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}