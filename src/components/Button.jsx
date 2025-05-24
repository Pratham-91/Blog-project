import React from 'react'

// A modern, stunning button component
function Button({
  children,
  type = 'button',
  bgColor = 'bg-gradient-to-r from-blue-500 to-blue-700',
  textColor = 'text-white',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        px-6 py-2.5
        rounded-full
        ${bgColor} ${textColor} ${className}
        font-semibold
        shadow-md
        hover:from-blue-600 hover:to-blue-800
        hover:shadow-lg
        hover:scale-105
        transition-all
        duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        active:scale-95
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button