import useFetch from "../../hooks/useFetch/useFetch";

import FilterBarComp from "../../components/filter-bar/filter-bar-comp"
import CheckoutComp from "../../components/checkout/checkout-comp.jsx";
import ShopItemComp from "../../components/shop-item/shop-item-comp";
import {ReactComponent as Spinner} from '../../assets/loading-icon.svg'


const Index = () => {
<<<<<<< Updated upstream
  const {data, isPending, error} = useFetch('http://localhost:3000/items');
=======
  const {filterPrice, filterColor, filterSorting, link} = useContext(FilterContext);

  const {data, isPending, error} = useFetch(`http://localhost:3000/items?price_lte=${filterPrice}&${link}`);

  

>>>>>>> Stashed changes


  return (
    <div className='w-[85%] mt-[20px] m-auto min-h-screen'>
<<<<<<< Updated upstream
      <p className='font-medium font-sans text-4xl'>New Arrivals</p>
      <FilterBarComp totalItems={data.length}/>
=======
      <p className='font-medium font-sans max-sm:text-3xl text-4xl'>New Arrivals</p>
      <FilterBarComp totalItems={data.length} />
>>>>>>> Stashed changes
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