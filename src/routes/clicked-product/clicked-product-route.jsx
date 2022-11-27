import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch/useFetch";

import CheckoutComp from "../../components/checkout/checkout-comp";
import { FilterContext } from "../../contexts/filter-context/filter-context";

import { CartContext } from "../../contexts/cart-context/cart-context";
import {ReactComponent as Arrow} from '../../assets/right-arrow-icon.svg'




const ClickedProductRoute = () => {
    const {productId} = useParams();
    const {addItemToCart, handCol, col, size, handSize, cartItems} = useContext(CartContext)
    const {handleFilterID} = useContext(FilterContext)

    const {data, isPending, error} = useFetch(`https://dprince001.github.io/db.json`);

    const setItem = () => {
        if(!isPending) {
            const product = handleFilterID(data, productId);
            return product;
        }
    }

    // console.log(setItem());
        const product = setItem();
    

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        const newData = {...product, colorSel: col, sizeSel: size};
        addItemToCart(newData);
    }


    let itemInCartQuantity = 0;

    // {const ele = cartItems.find(item => item.id === data.id);
    {cartItems.length > 0 && cartItems.map(item => item.id === productId ? itemInCartQuantity = item.itemInCartQuantity : item)}

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    
  return (
    <div className="w-[85%] m-auto">
        <span className="flex cursor-pointer text-sm items-center mt-6 mb-1" onClick={handleGoBack}><Arrow className="rotate-180"/> <span className="ml-3">Go back</span></span>
        <div className="max-md:flex-col flex space-x-7 max-md:space-x-0">
            <div className="basis-[45%] mb-4">
                {product && <img src={product.imageUrl} alt="" />}
            </div>

            {!isPending && <form onSubmit={handleAddItemToCart} className=''>
                <p className='font-inter text-sm font-extralight text-lg mt-[10px]'>DP STORES</p>
                {data && <p className='font-medium font-serif text-3xl group-hover:underline'>{product.title}</p>}
                {data && <p className='font-normal font-["sans-serif"] mt-2 text-2xl'>₦{product.price.toLocaleString()}</p>}            
                <p className="mt-4 text-2xl font-light">Available in: </p>
                {product.color && 
                    <div>
                        {product.color.map((col, index) => {
                            return(
                                <span key={index} className='mr-3'>
                                    <input type='radio' name="color"  required value={col} onClick={handCol}/>                               
                                    <span className="p-2 text-2xl font-light">{col}</span>
                                </span>
                            )
                        })}
                    </div>
                }
                {!isPending && product.sizes ? 
                    <div>
                        <p className="mt-4 text-2xl font-light">Sizes: </p>
                        {
                            Object.values(product.sizes).map((size, index) => {
                                return(
                                    <span key={index} className='mr-3'>
                                        <input type='radio' name="size" onClick={handSize} required value={size}/>
                                        <span className="p-2 text-2xl font-light">{size}</span>
                                    </span>
                                )
                            })
                        }
                    </div>
                    : null
                }
                {product.available ?
                    <>
                        {(product.sizes ? size === '' || col === '' : col === '') ?  <input type='button' value='SELECT VARIANT' className='block bg-blue border border-blue hover:bg-white hover:text-blue w-full font-medium text-sm text-white p-2 px-4 mt-8 cursor-pointer ' disabled/> : <input type='button' value={itemInCartQuantity < product.quantity ? 'ADD TO CART' : 'OUT OF STOCK'} className='block cursor-pointer bg-blue border border-blue hover:bg-white hover:text-blue w-full font-medium text-sm text-center text-white p-2 px-4 mt-8'  onClick={itemInCartQuantity < product.quantity ? handleAddItemToCart: null} />}
                    </>
                    :
                    <input type='button' value='SOLD OUT' disabled className='cursor-pointer block bg-blue border border-blue hover:bg-white hover:text-blue w-full font-medium text-sm text-white p-2 px-4 mt-8'/>
                }
            </form>}
        </div>

        
        <CheckoutComp/>
    </div>
  )
}

export default ClickedProductRoute