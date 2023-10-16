export default function Block({ title, description='', name, value, state, onChange }) {
  const activeCss = 'border-blue-500 shadow-lg'

  const isSelected = value === state[name]

  return (
    <button
      onClick={() => onChange({
        [name]: value
      })}
      className={`
        flex flex-col bg-gray-100 w-full border justify-center items-center rounded
        ${isSelected ? activeCss : 'border-transparent'}
      `}
    >
      <h3 className='text-xl text-black'>{title}</h3>
      {description && (
        <div className='py-1'>
          <p className='text-sm text-gray-400'>{description}</p>
        </div>
      )}
    </button>
  )
}