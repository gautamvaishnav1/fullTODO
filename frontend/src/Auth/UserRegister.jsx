import React from 'react'

const UserRegister = () => {
  return (

    <form action="/user/register" className='flex justify-center items-center'>
        <input className='appearance-none bg-transparent border rounded-3xl w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='text' placeholder='Username' name='firstName' aria-label='first name' />   
        <input className='appearance-none bg-transparent border rounded-3xl w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='email' placeholder='Email' name='email' aria-label='email' />
        <input className='appearance-none bg-transparent border rounded-3xl w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='password' placeholder='Password' name='password' aria-label='password' />
        <input type="password" className='appearance-none bg-transparent border rounded-3xl w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Confirm Password' name='confirmPassword' aria-label='confirm password' />
        <input type="number" name="phoneNumber" className='appearance-none bg-transparent border rounded-3xl w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' />
        <button className='shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type='button'>
          Register
        </button>   
    </form>
  )
}

export default UserRegister