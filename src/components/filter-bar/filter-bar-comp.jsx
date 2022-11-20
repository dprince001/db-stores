
const FilterBarComp = ({totalItems}) => {
  return (
    <div className="hidden lg:flex items-center justify-between mt-[30px]">
      <div>
        <span className="">Filter:</span> 
        <select name="price" id="price-range" className="mx-[20px] text-sm min-w-[135px]">
            <option selected disabled>Filter by price</option>
            <option value="5000">Less than N5000</option>
            <option value="10000">Less than N10000</option>
            <option value="20000">Less than N20000</option>
            <option value="50000">Less than N50000</option>
        </select>
        <select name="color" id="color-select" className="text-sm min-w-[135px]">
            <option selected disabled>Filter by color</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="white">White</option>
        </select>
      </div>

      <div>
        <span className="ml-auto">Sort by:</span>
        <select name="sorting" className="text-sm mx-[20px] min-w-[150px]">
            <option selected disabled>Featured</option>
            <option value="sort-letter-right">Alphabetically A-Z</option>
            <option value="sort-letter-left">Alphabetically Z-A</option>
            <option value="sort-price">Price low to high</option>
            <option value="sort-price">Price high to low</option>
        </select>
        <span>{totalItems} products</span>
      </div>

    </div>
  )
}

export default FilterBarComp