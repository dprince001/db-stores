import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import ReactRotatingText from 'react-rotating-text'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context/cart-context'
import { NavDropdownContext } from '../../contexts/nav-context/nav-dropdown-context'
// import CheckoutComp from '../../components/checkout/checkout-comp'

import NavDropdownComp from '../../components/nav-dropdown/nav-dropdown-comp'


import {ReactComponent as ProfileIcon} from '../../assets/user-icon.svg'
import {ReactComponent as CartIcon} from '../../assets/cart-icon.svg'
import {ReactComponent as MenuIcon} from '../../assets/menu-icon.svg'

import FooterComp from '../../components/footer/footer-comp'



const Navigation = () => {

    const {isCartOpen, setIsCartOpen, cartItems} = useContext(CartContext);
    const {isNavDropped, setIsNavDropped} = useContext(NavDropdownContext)


    const handleCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    const handleNavDropped = () => {
        setIsNavDropped(!isNavDropped);
    }



  return (
    <div className='w-full'>
        <div className='bg-gradient-to-r from-blue to-lightgreen text-white h-[30px] z-10 sticky top-0 flex items-center justify-center'>
            <span className='max-md:text-sm'>
                <ReactRotatingText items={['Free delivery for orders higher than ₦20,000.00', 'Pay on delivery available', 'Get 7% off your next purchase']} cursor={false} emptyPause={3000} pause={3000} typingInterval={50} deletingInterval={50}/>
            </span>
        </div>
        <nav className='py-[20px] z-10 sticky top-[30px] bg-white'>
            <div className='flex items-center justify-between w-[85%] m-auto'>
            <MenuIcon className='hidden max-md:block cursor-pointer' onClick={handleNavDropped}/>
                <Link to='/'>
                    <span className='font-semibold text-2xl md:text-3xl font-serif'>dp stores</span>
                </Link>
                <div className='hidden md:flex justify-between space-x-9'>
                    <Link to='/men'>
                        <span className='text-sm'>MEN WEARS</span>
                    </Link>
                    <Link to='/women'>
                        <span className='text-sm'>WOMEN WEARS</span>
                    </Link>
                    <Link to='/accessories'>
                        <span className='text-sm'>ACCESSORIES</span>
                    </Link>
                </div>

                <div className='flex space-x-4'>
                    <Link to='/signin'>
                        <ProfileIcon/>
                    </Link>
                    <span className='relative cursor-pointer' onClick={handleCartOpen}>
                        <CartIcon />
                        {<span className='absolute right-0 top-0 rounded-lg text-xs w-[15px] h-[15px] pb-[2px] flex justify-center items-center bg-blue text-white'>{cartItems.length}</span>}
                    </span>
                </div>
            </div>
        </nav>
        <NavDropdownComp />
        {/* {isCartOpen && <CheckoutComp className='transition-all'/>} */}
        <Outlet/>
        <FooterComp/>
    </div>
  )
}

export default Navigation