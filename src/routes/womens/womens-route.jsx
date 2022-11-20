
import FilterBarComp from "../../components/filter-bar/filter-bar-comp"

import useFetch from "../../hooks/useFetch/useFetch"
import ShopItemComp from "../../components/shop-item/shop-item-comp";
import {ReactComponent as Spinner} from '../../assets/loading-icon.svg'

const MensRoute = () => {
  const {data, isPending, error} = useFetch('http://localhost:3000/items?category=womens');

  return (
    <div>
      <div className='w-[85%] mt-[20px] m-auto relative min-h-screen'>
        <p className='font-medium font-sans text-4xl'>Women's</p>
        <FilterBarComp totalItems={data.length}/>
        {
          data && <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
          {
            data.map(item => <ShopItemComp key={item.id} itemObj={item}/>)
          }
          </div>
        }
        {isPending && <span className="absolute left-[48%] top-[40%] animate-spin"><Spinner/></span>}
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}

export default MensRoute