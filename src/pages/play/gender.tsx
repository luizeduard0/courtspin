import Block from "@/components/common/block";
import { WizardStepProps } from "@/types/props-types/wizard-state.type";

export default function GenderStep({ wizardState, onChange, onPrev, onNext }: WizardStepProps) {
  return (
    <>
      <div className='flex gap-2 h-full'>
        <Block
          state={wizardState}
          title='Male'
          name='gender'
          value='M'
          onChange={(value: {}) => {
            onChange({
              info: {
                ...wizardState.info,
                ...value
              }
            })
          }}
        />
      </div>
      <div className='flex gap-2 h-full'>
        <Block
          state={wizardState}
          title='Female'
          name='gender'
          value='F'
          onChange={(value: {}) => {
            onChange({
              info: {
                ...wizardState.info,
                ...value
              }
            })
          }}
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