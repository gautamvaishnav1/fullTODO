import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLogin from '../Auth/UserLogin'
import UserRegister from '../Auth/UserRegister'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow py-8 px-4">
          <Routes>
            <Route path='/user/login' element={<UserLogin />} />
            <Route path='/user/register' element={<UserRegister/>}></Route>
            <Route path='/' element={<div className="max-w-4xl mx-auto text-center py-12"><h1 className="text-4xl font-bold text-gray-800">Welcome to Todo App</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
