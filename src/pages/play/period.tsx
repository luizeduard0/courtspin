import Block from "@/components/common/block";
import { WizardStepProps } from "@/types/props-types/wizard-state.type";
import dayjs from "dayjs";

import weekday from 'dayjs/plugin/weekday'
dayjs.extend(weekday)

export default function PeriodStep({ wizardState, onChange, onPrev, onNext }: WizardStepProps) {
  return (
    <>
      <div className='flex gap-2 h-full'>
        <Block
          state={wizardState}
          title='Today'
          name='start'
          value='M'
          onChange={(value: {}) => {
            onChange({
              start: dayjs().toISOString(),
              end: dayjs().toISOString()
            })
          }}
          className='bg-blue-300'
        />
        <Block
          state={wizardState}
          title='Tomorrow'
          name='start'
          value='M'
          onChange={(value: {}) => {
            onChange({
              start: dayjs().add(1,'day').toISOString(),
              end: dayjs().add(1,'day').toISOString()
            })
          }}
          className='bg-blue-200'
        />
      </div>
      <div className='flex gap-2 h-full'>
        <Block
          state={wizardState}
          title='This Week'
          name='start'
          value='M'
          onChange={(value: {}) => {
            onChange({
              start: dayjs().startOf('week').toISOString(),
              end: dayjs().endOf('week').toISOString()
            })
          }}
          className='bg-blue-100'
        />
        <Block
          state={wizardState}
          title='This Weekend'
          name='start'
          value=''
          onChange={(value: {}) => {
            onChange({
              start: dayjs().weekday(6).toISOString(),
              end: dayjs().weekday(7).toISOString()
            })
          }}
          className='bg-blue-50'
        />
      </div>

      <div className='flex gap-2 mt-2 pt-2 border-t border-gray-200'>
        <button
          onClick={onPrev}
          className={`
        w-full
        text-gray-900 bg-gray-100 px-1 py-2 rounded
      `}
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className={`
        w-full
        text-white px-1 py-2 rounded
        bg-blue-700
      `}
          disabled={wizardState.type == undefined}
        >
          Next
        </button>
      </div>
    </>
  )
}