import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context/cart-context";

import CheckoutItem from "./checkout-item";


import {ReactComponent as CartIcon} from '../../assets/cart-icon.svg'
import {ReactComponent as CancelIcon} from '../../assets/right-arrow-icon.svg'




const CheckoutComp = () => {

    const {isCartOpen, setIsCartOpen, cartItems, cartTotal, colorSel, sizeSel} = useContext(CartContext);

    const handleCartClose = () => {
        setIsCartOpen(!isCartOpen);
    }

    const itemsInLink = cartItems.map(item => {
        return `${item.itemInCartQuantity} ${item.colorSel} size ${sizeSel ? item.sizeSel : ''}  ${item.title} at ₦${item.price} each`
    })


  return (
    <div>
        <div className={`${isCartOpen ? 'w-full sm:w-2/4 lg:w-2/5 max-w-[450px] min-w-[350px]' : 'w-0'} transition-all min-h-screen bg-white border border-blue fixed top-0 z-20 right-0`} >
            <div className="flex justify-between w-[85%] m-auto my-4 mb-6 items-center">
                <CartIcon/>
                <span className="text-lg font-mono italic">Cart</span>
                <CancelIcon onClick={handleCartClose} className='cursor-pointer'/>
            </div>
            <div className='w-[85%] m-auto'>
                {cartItems.length > 0 && 
                    <div className='w-full max-h-[340px] overflow-y-scroll'>
                        {cartItems.map(item => <CheckoutItem obj={item} key={item.id} />)}
                    </div>
                }
            </div>

            {cartItems.length > 0 && 
                <div className="absolute z-20 bottom-[50px] w-full">
                    <div className='w-[90%] m-auto flex justify-between'>
                        <span className='font-medium'>ESTIMATED TOTAL:</span>
                        <span className='font-medium'>₦{cartTotal.toLocaleString()}.00</span>
                    </div>
                    <a href={`https://wa.me/+2349077006946?text=Hello, I will like to order for ${itemsInLink} and products total = ₦${cartTotal}`} target='_blank' className='block bg-blue border border-blue hover:bg-white hover:text-blue w-[90%] rounded-full text-white p-2 px-4 m-auto mt-3 font-medium text-sm text-center'>CHECKOUT NOW</a>
                    <p className="underline text-center text-lg mt-3 cursor-pointer" onClick={() => setIsCartOpen(false)}>Continue Shopping</p>
                </div>
            }
        </div>
    </div>
  )
}

export default CheckoutComp