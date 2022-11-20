// import { useEffect, useState } from "react";
// import ShopItemComp from "../../components/shop-item/shop-item-comp";

// import React from 'react'

// const useFetch = ({link}) => {
//   const [shopItems, setShopItems] = useState([]);

//   useEffect(() => {
    // const response = async () => {
    // //   const data = await fetch(`http://localhost:3000/items$`);
    //   const data = await fetch(`http://localhost:3000/items?${link}`);
    //   const result = await data.json();
    //   setShopItems(result); 
//     };
  
//     response();
//   }, []);


//   return (
//     <div>
//       <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
//         {shopItems.map((item) => (
//           <ShopItemComp key={item.id} itemObj={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default useFetch


import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const response = async () => {
        const data = await fetch(url);
        const result = await data.json();
        setData(result); 
        setIsPending(false);
      }
      response();
    }
    catch(err) {
      setIsPending(false);
      setError(err.message);
    }
  }, [url])

  return {data, isPending, error}
}

export default useFetch