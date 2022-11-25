import { createContext, useState } from "react";

export const FilterContext = createContext({
  filterPrice: 1000000000,
  setFilterPrice: () => {},
  filterSorting: "",
  correctVar: '',
  setCorrectVar: () => {},
  setFilterSorting: () => {},
  handlePriceChange: () => {},
  handleSortChange: () => {},
});

export const FilterProvider = ({children}) => {


    const [filterPrice, setFilterPrice] = useState(1000000000);
    const [filterSorting, setFilterSorting] = useState("");

    const handlePriceChange = (e) => {
        setFilterPrice(e.target.value)
    }
    const handleSortChange = (e) => {
      setFilterSorting(e.target.value);
    };

    const getSortType = () => {
      let correctVar;
      if (filterSorting === "letasc") 
        correctVar = `_sort=title&_order=asc`;
      else if (filterSorting === "letdesc")
        correctVar = `_sort=title&_order=desc`;
      else if (filterSorting === "numdesc")
        correctVar = `_sort=price&_order=asc`;
      else if (filterSorting === "numasc")
        correctVar = `_sort=price&_order=desc`;
      return correctVar;
    }

    const link = getSortType();

    const value = {filterPrice, filterSorting, link, handlePriceChange, handleSortChange}

    return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
}