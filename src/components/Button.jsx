/* eslint-disable react/prop-types */

function Button({handleClick, children}) {
  return (
    <button onClick={handleClick} className="border p-2 bg-blue-500 rounded-lg border-black">
      {children}
    </button>
  )
}

export default Button