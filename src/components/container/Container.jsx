import React from 'react'

function Container({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8">
      <div className="rounded-xl shadow-md bg-gradient-to-br  p-4 sm:p-8">
        {children}
      </div>
    </div>
  )
}

export default Container