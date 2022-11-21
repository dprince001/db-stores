import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart-context/cart-context";


import {ReactComponent as MinusIcon} from '../../assets/minus-icon.svg'
import {ReactComponent as AddIcon} from '../../assets/plus-icon.svg'
import {ReactComponent as DeleteIcon} from '../../assets/delete-icon.svg'



const CheckoutItem = ({obj}) => {
    const {title, id, itemInCartQuantity, price, imageUrl, } = obj;

    const {addItemToCart, removeItemFromCart, deleteItemFromCart} = useContext(CartContext);

    const handleCartIncrease = () => {
        addItemToCart(obj);
    }

    const handleCartDecrease = () => {
        removeItemFromCart(obj);
    }

    const handleDelete = () => {
        deleteItemFromCart(obj)
    }



  return (
    <>
        <div key={id} className={`w-full transition-all flex space-x-6 justify-between my-6`}>
            <img src={imageUrl} alt="" className='max-w-[90px]'/>
            <div className='w-full'>
                <div className='flex justify-between align-items space-x-6'>
                    <span className="font-medium">{title}</span>
                    <DeleteIcon className="cursor-pointer" onClick={handleDelete}/>
                </div>

                <div className='w-[100%] flex max-sm:flex-col justify-between mt-10 items-center max-sm:items-start'>
                    <div className="border flex items-center justify-between w-[80px] p-2">
                        <MinusIcon className="cursor-pointer" onClick={handleCartDecrease}/>
                        <span>{itemInCartQuantity}</span>
                        <AddIcon className="cursor-pointer" onClick={handleCartIncrease} />
                    </div>
                    {price && <span className='font-medium'>₦{price.toLocaleString()}.00</span>}
                </div>
            </div>
        </div>
    </>
  )
}

export default CheckoutItem