import { ReactNode } from "react";

export default function CardWrapper(
  { children, className='flex flex-col bg-white gap-4 p-4 border-t border-b border-slate-200' }: 
  { children: ReactNode, className?: string }
) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}