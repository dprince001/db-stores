import { createContext, useState } from "react";

export const FilterContext = createContext({
  filterCategory: '', 
  filterPrice: 0,
  handleFilterCategory: () => {},
  handleFilterPrice: () => {},
  handleFilterID: () => {}
});

export const FilterProvider = ({ children }) => {

  const handleFilterCategory = (cartItemArr, filterby) => {
    if (cartItemArr) {
      return cartItemArr.filter((item) => item.category === filterby);
    }
  };

  const handleFilterPrice = (cartArr, price) => {
    if (cartArr) {
      return cartArr.filter((item) => item.price <= price);
    } 
  }

  const handleFilterID = (cartArr, id) => {
    if (cartArr) {
      // return cartArr.filter(item => item.id === id);
      return cartArr.find((item) => item.id === id);
    }
  }


  const value = {
    handleFilterPrice,
    handleFilterCategory,
    handleFilterID
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};