import React from 'react'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow"
      >
        <rect x="6" y="6" width="52" height="52" rx="14" fill="#2563eb" />
        <rect x="14" y="18" width="36" height="6" rx="3" fill="#fff" />
        <rect x="14" y="30" width="24" height="6" rx="3" fill="#fff" />
        <rect x="14" y="42" width="16" height="6" rx="3" fill="#fff" />
        <circle cx="48" cy="45" r="4" fill="#fff" />
        <circle cx="48" cy="45" r="2" fill="#2563eb" />
      </svg>
      <span className="font-extrabold text-2xl tracking-tight text-blue-700 select-none">
        MegaBlog
      </span>
    </div>
  )
}

export default Logo