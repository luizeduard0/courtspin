import { useEffect, useState } from "react"
import SearchingForStep from "./searching-for"
import { InitialWizardState } from "@/types/props-types/wizard-state.type"
import SkillsetStep from "./skillset"
import ModalityStep from "./modality"
import LocationStep from "./location"
import InfoStep from "./info"
import { useDispatch } from "react-redux"
import { requestRegister } from "@/redux/auth/action-reducer"
import GenderStep from "./gender"

const steps = ['searching-for', 'gender', 'modality', 'skillset', 'location', 'info']

const initialWizardState: InitialWizardState = {
  step: 'searching-for',
  type: undefined,
  modality: undefined,
  ntrp: undefined,
  info: {
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    email: '',
    password: '',
    password_confirmation: '',
    location: undefined,
  }
}

export default function PlayPage() {
  const dispatch = useDispatch()
  const [wizard, setWizard] = useState(initialWizardState)

  useEffect(() => {

  }, [])

  const handleChange = (state: {}) => {
    setWizard(prev => ({
      ...prev,
      ...state
    }))
    handleNext()
  }

  const handleNext = () => {
    const currentIndex = steps.findIndex((step) => step === wizard.step)
    const nextIndex = currentIndex + 1
    const len = steps.length

    if (nextIndex < len) {
      setWizard(prev => ({
        ...prev,
        step: steps[nextIndex]
      }))
    }
  }

  const handlePrev = () => {
    const currentIndex = steps.findIndex((step) => step === wizard.step)
    const prevIndex = currentIndex - 1

    if (prevIndex >= 0) {
      setWizard(prev => ({
        ...prev,
        step: steps[prevIndex]
      }))
    }
  }

  const handleCreateAccount = () => {
    dispatch(requestRegister(wizard.info))
  }

  return (
    <div className='flex flex-col gap-2 p-2' style={{ height: "calc(100vh - 138px)" }}>
      {wizard.step === 'searching-for' && (
        <SearchingForStep
          wizardState={wizard}
          onChange={handleChange}
          onNext={handleNext}
        />
      )}

      {wizard.step === 'modality' && (
        <ModalityStep
          wizardState={wizard}
          onChange={handleChange}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {wizard.step === 'skillset' && (
        <SkillsetStep
          wizardState={wizard}
          onChange={handleChange}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {wizard.step === 'location' && (
        <LocationStep
          wizardState={wizard}
          onChange={handleChange}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {wizard.step === 'info' && (
        <InfoStep
          wizardState={wizard}
          onChange={handleChange}
          onPrev={handlePrev}
          onNext={handleCreateAccount}
        />
      )}

      {wizard.step === 'gender' && (
        <GenderStep
          wizardState={wizard}
          onChange={handleChange}
          onPrev={handlePrev}
          onNext={handleCreateAccount}
        />
      )}
    </div>
  )
}