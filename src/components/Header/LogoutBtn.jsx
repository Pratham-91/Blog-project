import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { FiLogOut } from 'react-icons/fi'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <button
      className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-200"
      onClick={logoutHandler}
      title="Logout"
    >
      <FiLogOut className="text-lg" />
      Logout
    </button>
  )
}

export default LogoutBtn