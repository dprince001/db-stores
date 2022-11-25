import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart-context/cart-context";


import {ReactComponent as MinusIcon} from '../../assets/minus-icon.svg'
import {ReactComponent as AddIcon} from '../../assets/plus-icon.svg'
import {ReactComponent as DeleteIcon} from '../../assets/delete-icon.svg'



const CheckoutItem = ({obj, color, size}) => {
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
                    <div className="flex flex-col">
                        <span className="font-medium max-sm:text-sm">{title}</span>
                        {<p className="italic mb-2 max-sm:text-xs">{colorSel} {sizeSel}</p>}
                    </div>
                    <DeleteIcon className="cursor-pointer" onClick={handleDelete}/>
                </div>
                <p className="text-xs mb-1">{quantity} left in stock</p>
                <div className='w-[100%] flex max-sm:flex-col justify-between mt-4 items-center max-sm:items-start mt-auto'>
                    <div className="border flex items-center justify-between w-[80px] p-2 max-sm:text-sm">
                        <MinusIcon className="cursor-pointer" onClick={handleCartDecrease}/>
                        <span>{itemInCartQuantity}</span>
                        <AddIcon className="cursor-pointer" onClick={itemInCartQuantity < quantity ? handleCartIncrease : null} />
                    </div>
                    {price && <span className='font-medium max-sm:text-sm'>₦{price.toLocaleString()}.00</span>}
                </div>
            </div>
        </div>
    </>
  )
}

export default CheckoutItem