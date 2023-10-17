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
        style={{ backgroundImage: `url('static/imgs/court1.jpg')`, backgroundSize: 'cover' }}
      >
        <h3
          className={`
          text-xl mb-1
          bg-black/90 text-white rounded-full p-5 py-1 border-2 border-white/70
        `}
        >
          Location
        </h3>
        <ReactGoogleAutocomplete
          apiKey={googleApiKey}
          onPlaceSelected={(result) => {
            if (!result) return
            const city = result.address_components.find((ac: any) => ac.types.includes('locality'))
            setPlace(city)
            onChange({
              location: city.long_name
            })
          }}
          className='bg-white/80 border border-black px-8 py-3 rounded-full shadow-xl focus:ring-blue-600'
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
          ${place ? 'bg-blue-700' : 'bg-gray-300'}
        `}
          disabled={!place}
        >
          Next
        </button>
      </div>
    </>
  )
}