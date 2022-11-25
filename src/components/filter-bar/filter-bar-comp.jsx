
const FilterBarComp = ({totalItems}) => {
  return (
    <div className="max-md:flex-col flex items-center justify-between max-md:items-start mt-[30px]">
      <div>
<<<<<<< Updated upstream
        <span className="">Filter:</span> 
        <select name="price" id="price-range" className="mx-[20px] text-sm min-w-[135px]">
            <option selected disabled>Filter by price</option>
=======
        <span className="max-sm:text-sm">Filter:</span> 
        <select name="price" id="price-range" className="mx-[20px] text-sm max-sm:text-xs min-w-[125px]" onChange={handlePriceChange}>
            <option selected value='0' disabled>Filter by price</option>
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
      <div>
        <span className="ml-auto">Sort by:</span>
        <select name="sorting" className="text-sm mx-[20px] min-w-[150px]">
            <option selected disabled>Featured</option>
            <option value="sort-letter-right">Alphabetically A-Z</option>
            <option value="sort-letter-left">Alphabetically Z-A</option>
            <option value="sort-price">Price low to high</option>
            <option value="sort-price">Price high to low</option>
=======
      <div className="flex max-md:w-full">
        <span className="max-sm:text-sm">Sort by:</span>
        <select name="sorting" className="text-sm max-sm:text-xs mx-[20px] min-w-[130px]" onChange={handleSortChange}>
            <option selected value='' disabled>Featured</option>
            <option value="letasc">Alphabetically A-Z</option>
            <option value="letdesc">Alphabetically Z-A</option>
            <option value="numdesc">Price low to high</option>
            <option value="numasc">Price high to low</option>
>>>>>>> Stashed changes
        </select>
        <span className="ml-auto max-sm:text-xs">{totalItems} products</span>
      </div>

    </div>
  )
}

export default FilterBarComp