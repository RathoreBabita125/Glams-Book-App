import './App.css'
import TopText from './Components/TopBox/TopText'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ShowCartContext } from './Components/Context/ShowCartContext'
import { useState, useEffect } from 'react'


function App() {

  // Load cart items from localStorage initially
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });


  // Whenever cartItems change, update localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (

    <ShowCartContext.Provider value={{ cartItems, setCartItems }}>
      <div className='hide-scrollbar h-screen overflow-y-scroll'>
        <TopText />
        <Header />
        <div className='mt-20'>
          <Outlet />
         
        </div>
        <Footer />
      </div>
    </ShowCartContext.Provider>
  )
}

export default App
