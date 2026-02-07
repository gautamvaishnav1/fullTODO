import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-teal-600 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/">Todo App</NavLink>
        </div>
        <div className="flex gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : "hover:text-teal-200"}>
            Home
          </NavLink>
          <NavLink to="/user/login" className={({ isActive }) => isActive ? "font-bold" : "hover:text-teal-200"}>
            Login
          </NavLink>
          <NavLink to="/user/register" className={({ isActive }) => isActive ? "font-bold" : "hover:text-teal-200"}>
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
