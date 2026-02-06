import React from 'react'

const UserLogin = () => {
  return (
    <form action="/login" className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter your email" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
        <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter your password" />
      </div>
      <button type="submit" className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500">Login</button>
    </form> 
  )
}

export default UserLogin
