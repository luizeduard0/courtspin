import { WizardStepProps } from "@/types/props-types/wizard-state.type";
import { useState } from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";

export default function LocationStep({ wizardState, onChange, onPrev, onNext }: WizardStepProps) {
  const [place, setPlace] = useState(undefined)
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY_API

  return (
    <>
      <div
        className='flex flex-col h-full p-4 bg-gray-100 w-full border justify-center items-center rounded'
      >
        <h3 className='text-xl text-black'>Location</h3>
        <ReactGoogleAutocomplete
          apiKey={googleApiKey}
          onPlaceSelected={(result) => {
            if (!result) return
            const city = result.address_components.find((ac: any) => ac.types.includes('locality'))
            onChange({
              location: city.long_name
            })
          }}
          className='border border-gray-400 px-2 py-3 rounded'
          style={{ width: '100%' }}
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