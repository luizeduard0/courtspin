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
          style={{ backgroundImage: `url('static/imgs/match.jpg')`, backgroundSize: 'cover'}}
        />
      </div>
      <div className='flex gap-2' style={{ height: '40%' }}>
        <Block
          title='Practice'
          name='type'
          value='PRACTICE'
          state={wizardState}
          onChange={onChange}
          style={{ backgroundImage: `url('static/imgs/practice.jpg')`, backgroundSize: 'cover'}}
        />
        <Block
          title='Learn'
          name='type'
          value='LEARN'
          state={wizardState}
          onChange={onChange}
          style={{ backgroundImage: `url('static/imgs/coach.jpg')`, backgroundSize: 'cover'}}
        />
      </div>
    </>
  )
}