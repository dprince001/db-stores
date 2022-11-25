import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch/useFetch";

import CheckoutComp from "../../components/checkout/checkout-comp";

import { CartContext } from "../../contexts/cart-context/cart-context";
import { useContext, useState } from "react";


const ClickedProductRoute = () => {
    const {productId} = useParams();
    const {addItemToCart, handCol, col, size, handSize, cartItems} = useContext(CartContext)
    const {data, isPending, error} = useFetch(`http://localhost:3000/items/${productId}`);
    // const [itemInCartQuantity, setItemInCartQuantity] = useState(0)
    
    const {title, price, color, sizes, available, quantity} = data;

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        const newData = {...data, colorSel: col, sizeSel: size};
        addItemToCart(newData);
    }


    let itemInCartQuantity = 0;

    // {const ele = cartItems.find(item => item.id === data.id);
    {cartItems.length > 0 && cartItems.map(item => item.id === data.id ? itemInCartQuantity = item.itemInCartQuantity : item)}

    
  return (
    <div className="w-[85%] m-auto max-md:flex-col flex mt-10 space-x-7 max-md:space-x-0">
        <div className="basis-[45%] mb-4">
            <img src={data.imageUrl} alt="" />
        </div>

        <form onSubmit={handleAddItemToCart} className=''>
            <p className='font-inter text-sm font-extralight text-lg mt-[10px]'>DP STORES</p>
            <p className='font-medium font-serif text-3xl group-hover:underline'>{title}</p>
            {!isPending && <p className='font-normal font-["sans-serif"] mt-2 text-2xl'>₦{price.toLocaleString()}</p>}            
            <p className="mt-4 text-2xl font-light">Available in: </p>
            {!isPending && 
                <div>
                    {color.map((col, index) => {
                        return(
                            <span key={index} className='mr-3'>
                                <input type='radio' name="color"  required value={col} onClick={handCol}/>                               
                                <span className="p-2 text-2xl font-light">{col}</span>
                            </span>
                        )
                    })}
                </div>
            }
            {!isPending && sizes ? 
                <div>
                    <p className="mt-4 text-2xl font-light">Sizes: </p>
                    {
                        Object.values(sizes).map((size, index) => {
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
            {available ?
                // TODO: check if radios are checked before allowing click
                <>
                    {(sizes ? size === '' || col === '' : col === '') ?  <input type='button' value='SELECT VARIANT' className='block bg-blue border border-blue hover:bg-white hover:text-blue w-full font-medium text-sm text-white p-2 px-4 mt-8 cursor-pointer ' disabled/> : <input type='button' value={itemInCartQuantity < quantity ? 'ADD TO CART' : 'OUT OF STOCK'} className='block cursor-pointer bg-blue border border-blue hover:bg-white hover:text-blue w-full font-medium text-sm text-center text-white p-2 px-4 mt-8'  onClick={itemInCartQuantity < quantity ? handleAddItemToCart: null} />}
                </>
                :
                <input type='button' value='SOLD OUT' disabled className='cursor-pointer block bg-blue border border-blue hover:bg-white hover:text-blue w-full font-medium text-sm text-white p-2 px-4 mt-8'/>
             }
        </form>

        
        {/* <CheckoutComp color={colorChosen} size={sizes ? sizeChosen : undefined}/> */}
        <CheckoutComp/>
    </div>
  )
}

export default ClickedProductRoute