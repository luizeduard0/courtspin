import { CardHeaderProps } from "@/types/props-types/card.type";
import { Calendar, MapPin } from "@phosphor-icons/react";
import dayjs from "dayjs";

export default function CardHeader({ children, ...card }: CardHeaderProps) {
  
const start = dayjs(card.start).format('MMM DD')
const end = dayjs(card.end).format('MMM DD')

  if (children) return children

  return (
    <div className='flex flex-col gap-0'>
      <h2 className='font-medium'>{card.title}</h2>
      <div className='flex justify-between'>
        <span className='flex text-gray-500 text-sm leading-none py-0.5'>
          <MapPin weight='duotone' />
          {card.location}
        </span>
        <span className='flex text-gray-500 text-sm leading-none py-0.5'>
          <Calendar weight='duotone' />
            {start == end ? start : `${start} - ${end}`}
        </span>
      </div>
    </div>
  )
}