import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch/useFetch";

import CheckoutComp from "../../components/checkout/checkout-comp";

import { CartContext } from "../../contexts/cart-context/cart-context";
import { useContext, useState } from "react";


const ClickedProductRoute = () => {
    const {productId} = useParams();
    const {cartItems, addItemToCart} = useContext(CartContext)
    const {data, isPending, error} = useFetch(`http://localhost:3000/items/${productId}`);

    const {title, price, color, sizes} = data;


    const [colorChosen, setColorChosen] = useState('');
    const [sizeChosen, setSizeChosen] = useState('');

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        addItemToCart(data);
    }

    const handleColorChange = (e) => {
        setColorChosen(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSizeChosen(e.target.value);
    };

    
  return (
    <div className="w-[85%] m-auto max-md:flex-col flex mt-10 space-x-7">
        <div className="basis-[45%]">
            <img src={data.imageUrl} alt="" />
        </div>

        <form onSubmit={handleAddItemToCart}>
            <p className='font-inter text-sm font-extralight text-lg mt-[10px]'>DP STORES</p>
            <p className='font-medium font-serif text-3xl group-hover:underline'>{title}</p>
            {!isPending && <p className='font-normal font-["sans-serif"] mt-2 text-2xl'>₦{price.toLocaleString()}</p>}            
            <p className="mt-4 text-2xl font-light">Available in: </p>
            {!isPending && 
                <div>
                    {color.map((col, index) => {
                        return(
                            <span key={index} className='mr-3'>
                                <input type='radio' name="color" required value={col} onClick={handleColorChange}/>
                                
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
                                    <input type='radio' name="size" required onClick={handleSizeChange} value={size}/>
                                    <span className="p-2 text-2xl font-light">{size}</span>
                                </span>
                            )
                        })
                    }
                </div>
                : null
            }
            <input type='submit' value='ADD TO CART' className='block bg-blue border border-blue hover:bg-white hover:text-blue w-full font-medium text-sm text-white p-2 px-4 mt-8' onClick={handleAddItemToCart}/>
        </form>

        
        <CheckoutComp />
    </div>
  )
}

export default ClickedProductRoute