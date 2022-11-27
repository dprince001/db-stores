import { useContext } from "react"
import { FilterContext } from "../../contexts/filter-context/filter-context";

const FilterBarComp = ({totalItems}) => {

  const {handlePriceChange, handleSortChange} = useContext(FilterContext);


  return (
    <div className="max-md:flex-col flex items-center justify-between max-md:items-start">
      {/* <div>
        <span className="max-sm:text-sm">Filter:</span> 
        <select name="price" id="price-range" className="mx-[20px] text-sm max-sm:text-xs min-w-[125px]" onChange={handlePriceChange}>
            <option selected value='0' disabled>Filter by price</option>
            <option value="5000">Less than N5000</option>
            <option value="10000">Less than N10000</option>
            <option value="20000">Less than N20000</option>
            <option value="50000">Less than N50000</option>
        </select>
      </div> */}

      {/* <div className="flex max-md:w-full">
        <span className="max-sm:text-sm">Sort by:</span>
        <select name="sorting" className="text-sm max-sm:text-xs mx-[20px] min-w-[130px]" onChange={handleSortChange}>
            <option selected value='' disabled>Featured</option>
            <option value="letasc">Alphabetically A-Z</option>
            <option value="letdesc">Alphabetically Z-A</option>
            <option value="numdesc">Price low to high</option>
            <option value="numasc">Price high to low</option>
        </select>
        <span className="ml-auto max-sm:text-xs">{totalItems} products</span>
      </div> */}
      <span className="ml-auto max-sm:text-xs">{totalItems} products</span>

    </div>
  )
}

export default FilterBarComp