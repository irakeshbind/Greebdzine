import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'



import '../src/style.css'
const App = () => {
  const myRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> }
  ])
  return (
    <div>
     <RouterProvider router={myRouter} />

    </div>
  )
}

export default App