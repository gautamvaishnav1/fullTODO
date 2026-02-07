import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white text-center py-6 mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Todo App. All rights reserved.
      </p>
      <p className="text-xs text-teal-200 mt-2">
        Built with React and Tailwind CSS
      </p>
    </footer>
  )
}

export default Footer
