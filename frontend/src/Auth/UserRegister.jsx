import React from 'react'
import { NavLink } from 'react-router-dom'

const UserRegister = () => {
  return (
    <form action="/user/register" className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">Username</label>
        <input type="text" id="firstName" name='firstName' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter your username" aria-label="first name" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" name='email' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter your email" aria-label="email" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
        <input type="password" id="password" name='password' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter your password" aria-label="password" />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
        <input type="password" id="confirmPassword" name='confirmPassword' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Confirm your password" aria-label="confirm password" />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
        <input type="number" id="phoneNumber" name="phoneNumber" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter your phone number" />
      </div>
      <button type="submit" className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500">Register</button>
      <div className="mt-4 text-center">
        <span className="text-gray-700">Already have an account? </span>
        <NavLink to='/user/login' className="text-teal-500 hover:text-teal-700 font-bold">Login</NavLink>
      </div>
    </form>
  )
}

export default UserRegister