import { useContext } from "react"
import { FilterContext } from "../../contexts/filter-context/filter-context";

const FilterBarComp = ({totalItems}) => {

  const {handlePriceChange, handleSortChange} = useContext(FilterContext);


  return (
    <div className="hidden lg:flex items-center justify-between mt-[30px]">
      <div>
        <span className="">Filter:</span> 
        <select name="price" id="price-range" className="mx-[20px] text-sm min-w-[135px]" onChange={handlePriceChange}>
            <option selected value='0' disabled>Filter by price</option>
            <option value="5000">Less than N5000</option>
            <option value="10000">Less than N10000</option>
            <option value="20000">Less than N20000</option>
            <option value="50000">Less than N50000</option>
        </select>
      </div>

      <div>
        <span className="ml-auto">Sort by:</span>
        <select name="sorting" className="text-sm mx-[20px] min-w-[150px]" onChange={handleSortChange}>
            <option selected value='' disabled>Featured</option>
            <option value="letasc">Alphabetically A-Z</option>
            <option value="letdesc">Alphabetically Z-A</option>
            <option value="numdesc">Price low to high</option>
            <option value="numasc">Price high to low</option>
        </select>
        <span>{totalItems} products</span>
      </div>

    </div>
  )
}

export default FilterBarComp