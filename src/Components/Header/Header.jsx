import React, { useState } from 'react'
import lotus from '../../assets/lotus.png'
import { NavLink } from 'react-router-dom'
import { AddCartContext } from '../Context/AddCartContext';
import { useContext } from "react";
import { ShowCartContext } from '../Context/ShowCartContext';

function Header({productImage, productName, price}) {

    // toggle Menu
    const [isToggledMenu, setIsToggledMenu] = useState(false);
    const toggleHandlerMenu = () => {
        setIsToggledMenu(!isToggledMenu)
    }


    // show AddedCart count 
    const { addedItemCount } = useContext(AddCartContext);

    //show cart
    
    // const { cartItems, setCartItems } = useContext(ShowCartContext);
    // function showCartItemHandler() {
    //     const newItem = { productImage, productName, price };
    //     // Prevent duplicate entries (optional)
    //     const isAlreadyInCart = cartItems.some(
    //         (item) => item.productName === productName
    //     );
    //     if (!isAlreadyInCart) {
    //         setCartItems([...cartItems, newItem]);
    //     }
    //     console.log("Cart Updated:", cartItems);
    // }
    

    return (
        <div className='w-full flex flex-wrap justify-between items-center p-3 shadow-md fixed z-15 top-6 bg-white'>
            <div className='space-x-5 text-xl'>
                <i class="fa-brands fa-facebook-f cursor-pointer"></i>
                <i class="fa-brands fa-instagram cursor-pointer"></i>
            </div>
            <div className='justify-between'>
                <ul className='md:flex flex-wrap hidden space-x-5 items-center font-semibold '>
                    <NavLink to='/' ><li>Home</li></NavLink>
                    <NavLink to='/service'><li>Services</li></NavLink>
                    <img src={lotus} alt="img" className='w-[45px] h-[35px]' />
                    <NavLink to='/about'><li>About Us</li></NavLink>
                    <NavLink to='contact'><li>Contact Us</li></NavLink>
                </ul>

            </div>
            <div className='space-x-5 text-xl flex items-center'>

                <div className='md:w-[20vw] md:h-[6vh] border-[1px] border-gray-400 rounded-xl flex bg-pink-50'>

                    <i class="fa-solid fa-magnifying-glass cursor-pointer m-2"></i>
                    <input className='w-[18vw] h-[5vh] outline-none text-[16px]' type="text" placeholder='Search for products' />
                </div>
                <NavLink to='/login'>
                    <button className='text-red-950 font-semibold cursor-pointer hover:text-red-900'>Login</button>
                </NavLink>
                <div className='relative'>

                    {
                       addedItemCount>=1?  <div className='w-[22px] h-[22px] rounded-full bg-red-700 absolute left-4 bottom-4 text-white text-center text-[15px]'>{addedItemCount}</div>:  <div></div>
                    }

                   <NavLink to="/cart">
                        <i class="fa-solid fa-cart-plus cursor-pointer"></i>
                   </NavLink>
                </div>

             
                <div className='md:hidden text-center'>
                    <i
                        onClick={toggleHandlerMenu}
                        class="fa-solid fa-bars cursor-pointer">
                    </i>
                </div>
            </div>


            {
                isToggledMenu &&
                <div className='flex justify-center'>
                    <ul className='items-center font-semibold text-center'>
                        <NavLink to='/' ><li>Home</li></NavLink>
                        <NavLink to='/service'><li>Services</li></NavLink>
                        <NavLink to='/about'><li>About Us</li></NavLink>
                        <NavLink to='contact'><li>Contact Us</li></NavLink>
                    </ul>

                </div>
            }



        </div>
    )
}

export default Header
