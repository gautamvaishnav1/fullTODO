import React from 'react'

const TodoForm = () => {
  return (
   <form action="" className='flex justify-center items-center my-4'>
     <input className='appearance-none bg-transparent border rounded-3xl w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='text' placeholder='Add a new task...' aria-label='Full name' />
     <input type="date" className='appearance-none bg-transparent border rounded-3xl w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'  />
     <button className='shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type='button'>
       Add
     </button>
   </form>
  )
}

export default TodoForm
