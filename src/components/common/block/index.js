export default function Block({ title, description='', name, value, state, onChange, style={}, className='' }) {
  const activeCss = 'border-blue-500 shadow-lg'

  const isSelected = value === state[name]

  return (
    <button
      onClick={() => onChange({
        [name]: value
      })}
      className={`
        flex flex-col relative w-full border justify-center items-center rounded
        ${className ? className : 'bg-gray-100'}
        ${isSelected ? activeCss : 'border-transparent'}
      `}
      style={style}
    >
      <h3 
        className={`
          text-xl
          ${style && style.backgroundImage ? 'bg-black/90 text-white rounded-full p-5 py-1 border-2 border-white/70' : ' text-black'}
        `}
      >
        {title}
      </h3>
      {description && (
        <div className='py-1'>
          <p 
            className={`
              text-sm text-gray-400
              ${style && style.backgroundImage ? 'bg-black/60 text-white py-1 absolute bottom-0 left-0 w-full' : ' text-black'}
            `}
          >
            {description}
          </p>
        </div>
      )}
    </button>
  )
}