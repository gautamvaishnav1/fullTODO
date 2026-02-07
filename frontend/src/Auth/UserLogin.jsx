import React from 'react'
import { NavLink } from 'react-router-dom'

const UserLogin = () => {
  return (
    <form action="/login" className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter your email" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter your password" />
      </div>
      <button type="submit" className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500">Login</button>
      <div className="mt-4 text-center">
        <span className="text-gray-700">Don't have an account? </span>
        <NavLink to='/user/register' className="text-teal-500 hover:text-teal-700 font-bold cursor-pointer">Register</NavLink>
      </div>
    </form> 
  )
}

export default UserLogin
