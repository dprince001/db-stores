import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ReactRotatingText from 'react-rotating-text'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context/cart-context'


import {ReactComponent as ProfileIcon} from '../../assets/user-icon.svg'
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg'
import {ReactComponent as CartIcon} from '../../assets/cart-icon.svg'

import FooterComp from '../../components/footer/footer-comp'



const Navigation = () => {

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const handleCartClose = () => {
        setIsCartOpen(!isCartOpen);
    }

    // console.log(isCartOpen)


  return (
    <div className='w-full'>
        <div className='bg-gradient-to-r from-blue to-lightgreen text-white h-[30px] z-10 sticky top-0 flex items-center justify-center'>
            <span className=''>
                <ReactRotatingText items={['Free delivery for orders higher than ₦20,000.00', 'Pay on delivery available', 'Get 7% off your next purchase']} cursor={false} emptyPause={3000} pause={3000} typingInterval={50} deletingInterval={50}/>
            </span>
        </div>
        <nav className='py-[30px] z-10 sticky top-[30px] bg-white'>
            <div className='flex items-center justify-between w-[85%] m-auto'>
                <Link to='/'>
                    <span className='font-semibold text-3xl font-serif'>dp stores</span>
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

                <div className='hidden md:flex space-x-6'>
                    <Link to='/signin'>
                        <ProfileIcon/>
                    </Link>
                    <CartIcon onClick={handleCartClose} className='cursor-pointer'/>
                </div>
            </div>
        </nav>
        <Outlet/>
        <FooterComp/>
    </div>
  )
}

export default Navigation