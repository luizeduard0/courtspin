import Block from "@/components/common/block";
import { WizardStepProps } from "@/types/props-types/wizard-state.type";

export default function SkillsetStep({ wizardState, onChange, onPrev, onNext }: WizardStepProps) {
  return (
    <>
      <div className='flex gap-2 h-full'>
        <Block
          state={wizardState}
          title='2.5'
          description='Just getting started'
          name='ntrp'
          value='2.5'
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
          title='3.0'
          description='Advanced Beginner'
          name='ntrp'
          value='3.0'
          onChange={(value: {}) => {
            onChange({
              info: {
                ...wizardState.info,
                ...value
              }
            })
          }}
        />
        <Block
          state={wizardState}
          title='3.5'
          description='Intermediate Beginner'
          name='ntrp'
          value='3.5'
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
          title='4.0'
          description='Advanced Intermediate'
          name='ntrp'
          value='4.0'
          onChange={(value: {}) => {
            onChange({
              info: {
                ...wizardState.info,
                ...value
              }
            })
          }}
        />
        <Block
          state={wizardState}
          title='4.5'
          description='Advanced Player'
          name='ntrp'
          value='4.5'
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
          title='5.0'
          description='Expert'
          name='ntrp'
          value='5.0'
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