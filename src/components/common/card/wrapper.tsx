import { ReactNode } from "react";

export default function CardWrapper({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col gap-3 p-3 border border-slate-300 rounded shadow'>
      {children}
    </div>
  )
}