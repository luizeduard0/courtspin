import { WizardStepProps } from "@/types/props-types/wizard-state.type";
import Block from '@/components/common/block'

export default function SearchingForStep({ wizardState, onChange, onNext, onPrev }: WizardStepProps) {

  return (
    <>
      <div className='flex gap-2 h-full' style={{ height: '60%' }}>
        <Block
          title='Match'
          name='type'
          value='MATCH'
          state={wizardState}
          onChange={onChange}
        />
      </div>
      <div className='flex gap-2' style={{ height: '40%' }}>
        <Block
          title='Practice'
          name='type'
          value='PRACTICE'
          state={wizardState}
          onChange={onChange}
        />
        <Block
          title='Learn'
          name='type'
          value='LEARN'
          state={wizardState}
          onChange={onChange}
        />
      </div>
      <div className='flex gap-2 mt-2 pt-2 border-t border-gray-200'>
        <button
          onClick={onNext}
          className={`
          w-full
          text-white px-1 py-2 rounded
          ${wizardState.type !== undefined ? 'bg-blue-700' : 'bg-gray-300'}
        `}
          disabled={wizardState.type == undefined}
        >
          Next
        </button>
      </div>
    </>
  )
}