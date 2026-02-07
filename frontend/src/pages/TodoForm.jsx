import React from 'react'

const TodoForm = () => {
  return (
   <form action="" className='max-w-lg mx-auto p-6 bg-white rounded shadow-md my-4'>
     <div className='mb-4'>
       <label htmlFor="taskInput" className="block text-gray-700 font-bold mb-2">New Task</label>
       <input id="taskInput" className='w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500' type='text' placeholder='Add a new task...' aria-label='New task' />
     </div>
     <div className='mb-4'>
       <label htmlFor="dueDate" className="block text-gray-700 font-bold mb-2">Due Date</label>
       <input id="dueDate" type="date" className='w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500' />
     </div>
     <button className='w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500' type='submit'>
       Add Task
     </button>
   </form>
  )
}

export default TodoForm
