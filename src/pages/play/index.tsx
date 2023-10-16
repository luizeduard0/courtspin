import { useEffect, useState } from "react"
import SearchingForStep from "./searching-for"
import { InitialWizardState } from "@/types/props-types/wizard-state.type"
import SkillsetStep from "./skillset"
import ModalityStep from "./modality"
import LocationStep from "./location"
import InfoStep from "./info"
import { useDispatch, useSelector } from "react-redux"
import { requestRegister } from "@/redux/auth/action-reducer"
import GenderStep from "./gender"
import { StateType } from "@/types/state.type"
import { requestSession, updateSessionDraftState } from "@/redux/sessions/action-reducer"
import PeriodStep from "./period"
import { useRouter } from "next/router"

const steps = ['searching-for', 'modality', 'location', 'period', 'saving']

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
  const router = useRouter()
  const dispatch = useDispatch()
  const [wizard, setWizard] = useState(initialWizardState)
  const { user } = useSelector((state: StateType) => state.auth)
  const { isLoading, selectedSession } = useSelector((state: StateType) => state.sessions)

  useEffect(() => {
    const currentIndex = steps.findIndex((step) => step === wizard.step)
    console.log(steps[currentIndex])
    if(steps[currentIndex] === 'saving') {
      dispatch(requestSession(wizard))
      return
    }
  }, [wizard.step])

  useEffect(() => {
    if(!selectedSession?.id) return
    router.push(`/sessions/${selectedSession.id}`)
  }, [selectedSession, router])

  const handleChange = (state: {}, shouldHandleNext: boolean = true) => {
    setWizard(prev => ({
      ...prev,
      ...state
    }))
    if (shouldHandleNext) {
      handleNext()
    }
  }

  const handleNext = () => {
    const currentIndex = steps.findIndex((step) => step === wizard.step)
    const nextIndex = currentIndex + 1
    const len = steps.length
    
    if (nextIndex === len) {
      /**
       * If Guest, show the signup form
       */
      if (!user?.id && steps[currentIndex] !== 'info' && steps[nextIndex] === undefined) {
        steps.push('skillset', 'gender', 'info')
        dispatch(updateSessionDraftState(wizard))
        handleNext()
        return
      }
    } else if (nextIndex < len) {
      dispatch(updateSessionDraftState(wizard))
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

      {wizard.step === 'period' && (
        <PeriodStep
          wizardState={wizard}
          onChange={handleChange}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {wizard.step === 'gender' && (
        <GenderStep
          wizardState={wizard}
          onChange={handleChange}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {wizard.step === 'info' && (
        <InfoStep
          wizardState={wizard}
          onChange={(state) => handleChange(state, false)}
          onPrev={handlePrev}
          onNext={handleCreateAccount}
        />
      )}

      {wizard.step === 'saving' && (
        <p>Saving session...</p>
      )}


    </div>
  )
}