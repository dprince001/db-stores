import { useContext } from "react";
import { FilterContext } from "../../contexts/filter-context/filter-context";

import FilterBarComp from "../../components/filter-bar/filter-bar-comp"

import useFetch from "../../hooks/useFetch/useFetch"
import ShopItemComp from "../../components/shop-item/shop-item-comp";
import {ReactComponent as Spinner} from '../../assets/loading-icon.svg'
import CheckoutComp from "../../components/checkout/checkout-comp";

const Accessories = () => {
  const {handleFilterCategory} = useContext(FilterContext);

  const {data, isPending, error} = useFetch(`https://dprince001.github.io/db.json`);

  const displayProducts = handleFilterCategory(data, 'accessories');

  return (
    <div>
      <div className='w-[85%] mt-[20px] m-auto min-h-screen'>
        <p className='font-medium font-sans max-sm:text-3xl text-4xl'>Accessories</p>
        {displayProducts && <FilterBarComp totalItems={displayProducts.length}/>}
        {
          displayProducts && <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
          {
            displayProducts.map(item => <ShopItemComp key={item.id} itemObj={item}/>)
          }
          </div>
        }
        {isPending && <span className="absolute left-[48%] top-[50%] animate-spin"><Spinner/></span>}
        {/* {error && <p>{error}</p>} */}
      </div>
      <CheckoutComp/>
    </div>
  )
}

export default Accessories