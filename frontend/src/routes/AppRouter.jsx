import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLogin from '../Auth/UserLogin'

const AppRouter = () => {
  return (
  < BrowserRouter>
    <Routes>
        <Route path='/user/login' element={<UserLogin />} />
        <Route path='/' element={<div>Home Page</div>} />
    </Routes>

  </BrowserRouter>
  )
}

export default AppRouter
