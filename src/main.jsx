import { React, StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Service from './Components/Services/Service.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Signup from './Components/LoginPage/Signup.jsx'
import Login from './Components/LoginPage/Login.jsx'
import { AddCartProvider } from './Components/Context/AddCartContext.jsx'
import CartPage from './Components/ShowCartItem/CartPage.jsx'


const router = createBrowserRouter(
  [
    {
      path: '',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/service',
          element: <Service />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/signup',
          element: <Signup />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/cart',
          element: <CartPage />
        },
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AddCartProvider>
      <RouterProvider router={router} />
    </AddCartProvider>
  </StrictMode>,


)
