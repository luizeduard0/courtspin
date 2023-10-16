import { WizardStepProps } from "@/types/props-types/wizard-state.type";

export default function InfoStep({ wizardState, onChange, onPrev, onNext }: WizardStepProps) {
  return (
    <>
      <div
        className='flex flex-col gap-3 h-full p-4 bg-gray-100 w-full border justify-center items-center rounded'
      >
        <h3 className='text-xl text-black mb-3'>About you</h3>

        <div className="bg-white w-full rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            First Name
          </label>
          <input
            type="text"
            value={wizardState.info.firstName}
            onChange={(e) => onChange({
              info: {
                ...wizardState.info,
                firstName: e.target.value
              }
            })}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="John"
          />
        </div>

        <div className="bg-white w-full rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Last Name
          </label>
          <input
            type="text"
            value={wizardState.info.lastName}
            onChange={(e) => onChange({
              info: {
                ...wizardState.info,
                lastName: e.target.value
              }
            })}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Doe"
          />
        </div>

        <div className="bg-white w-full rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Mobile Number
          </label>
          <input
            type="tel"
            value={wizardState.info.phoneNumber}
            onChange={(e) => onChange({
              info: {
                ...wizardState.info,
                phoneNumber: e.target.value
              }
            })}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Doe"
          />
        </div>

        <div className="bg-white w-full rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Email Address
          </label>
          <input
            type="text"
            value={wizardState.info.email}
            onChange={(e) => onChange({
              info: {
                ...wizardState.info,
                email: e.target.value
              }
            })}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="johndoe@email.com"
          />
        </div>

        <div className="bg-white w-full rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Password
          </label>
          <input
            type="password"
            value={wizardState.info.password}
            onChange={(e) => onChange({
              info: {
                ...wizardState.info,
                password: e.target.value
              }
            })}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="bg-white w-full rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Password Confirmation
          </label>
          <input
            type="password"
            value={wizardState.info.password_confirmation}
            onChange={(e) => onChange({
              info: {
                ...wizardState.info,
                password_confirmation: e.target.value
              }
            })}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
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
        >
          Create Accont
        </button>
      </div>
    </>
  )
}