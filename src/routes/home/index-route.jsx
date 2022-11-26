import { useContext, useState } from "react";
// import { CartContext } from "../../contexts/cart-context/cart-context";
import {FilterContext} from '../../contexts/filter-context/filter-context.js'

import useFetch from "../../hooks/useFetch/useFetch";

import FilterBarComp from "../../components/filter-bar/filter-bar-comp"
import CheckoutComp from "../../components/checkout/checkout-comp.jsx";
import ShopItemComp from "../../components/shop-item/shop-item-comp";
import {ReactComponent as Spinner} from '../../assets/loading-icon.svg'


const Index = () => {
  const {data, isPending, error} = useFetch(`https://dprince001.github.io/db.json`);


  return (
    <div className='w-[85%] mt-[20px] m-auto min-h-screen'>
      <p className='font-medium font-sans max-sm:text-3xl text-4xl'>New Arrivals</p>
      {data && <FilterBarComp totalItems={data.length}/>}
      {data && <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
        {
          data.map(item => <ShopItemComp key={item.id} itemObj={item}/>)
        }
      </div>}
      {isPending && <span className="absolute left-[48%] top-[50%] animate-spin"><Spinner/></span>}
      {error && <p>{error}</p>}
      <CheckoutComp/>
    </div>
  )
}

export default Index