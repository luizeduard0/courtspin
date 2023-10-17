import Block from "@/components/common/block";
import { WizardStepProps } from "@/types/props-types/wizard-state.type";

export default function ModalityStep({ wizardState, onChange, onPrev, onNext }: WizardStepProps) {
  return (
    <>
      {wizardState.type === 'LEARN' ? (
        <>
          <div className='flex gap-2 h-full'>
            <Block
              state={wizardState}
              title='Individual'
              name='modality'
              value='INDIVIDUAL'
              onChange={onChange}
              style={{ backgroundImage: `url('static/imgs/singles.jpg')`, backgroundSize: 'cover' }}
            />
          </div>
          <div className='flex gap-2 h-full'>
            <Block
              state={wizardState}
              title='Group'
              name='modality'
              value='GROUP'
              onChange={onChange}
              style={{ backgroundImage: `url('static/imgs/group.jpg')`, backgroundSize: 'cover' }}
            />
          </div>
        </>
      ) : (
        <>
          <div className='flex gap-2 h-full'>
            <Block
              state={wizardState}
              title='Singles'
              name='modality'
              value='SINGLES'
              onChange={onChange}
              style={{ backgroundImage: `url('static/imgs/singles.jpg')`, backgroundSize: 'cover' }}
            />
          </div>
          <div className='flex gap-2 h-full'>
            <Block
              state={wizardState}
              title='Doubles'
              name='modality'
              value='DOUBLES'
              onChange={onChange}
              style={{ backgroundImage: `url('static/imgs/doubles.jpg')`, backgroundSize: 'cover' }}
            />
          </div>
        </>
      )}

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