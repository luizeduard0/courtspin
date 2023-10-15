import { CardHeaderProps } from "@/types/props-types/card.type";

export default function CardHeader({ children, ...card }: CardHeaderProps) {

  if (children) return children

  return (
    <div className='flex flex-col gap-0'>
      <h2 className='font-medium'>{card.title}</h2>
      <span className='text-gray-500 text-sm leading-none'>{card.location}</span>
    </div>
  )
}