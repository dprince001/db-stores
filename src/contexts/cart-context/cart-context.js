import { useState, createContext, useEffect } from "react";


// helper functions
const addItem = (cartItemArr, productToAdd, col, size) => {
    // function to add item to cart needs to check if item already exist in cart. if it does it increases the quantity otherwise adds the item if its not found in cart

    // check
    const findItem = cartItemArr.find(item => item.id === productToAdd.id);


    // if found, increase itemincartquantity and return the updated array

    if(findItem) {
        
        // TODO: after checking that ID is present, check if the color and size chosen is same with previous same product
        const checkCol = cartItemArr.find(obj => obj.colorSel === col);
        const checkSize = cartItemArr.find((obj) => obj.sizeSel === size);
        
        if (checkCol && checkSize) {
            // increase quantity
            return cartItemArr.map(item => item.colorSel === productToAdd.colorSel && item.sizeSel === productToAdd.sizeSel? {...item, itemInCartQuantity: item.itemInCartQuantity + 1} : item);
        }
            
            
        // otherwise create new object    
        return [...cartItemArr, {...productToAdd, id: Date.now(), itemInCartQuantity: 1}];
    }


    return [
      ...cartItemArr,
      {
        ...productToAdd,
        itemInCartQuantity: 1
      }
    ];
}

const removeItem = (cartItemArr, productToRemove) => {
    // check if the product to remove actually exists in the array
    const itemExist = cartItemArr.find(item => item.id === productToRemove.id);

    // if itemquantity is just one then remove item totally
    // if it exist, subtract one from the itemInCartQuantity
    if (itemExist.itemInCartQuantity === 1) {
        return cartItemArr.filter(item => item.id !== productToRemove.id);
    }

    return cartItemArr.map(item => item.id === productToRemove.id ? {...productToRemove, itemInCartQuantity: item.itemInCartQuantity - 1} : item)
}

const deleteItem = (cartItemArr, productToDelete) => cartItemArr.filter(item => item.id !== productToDelete.id);



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartTotal: 0,
  col: "",
  handCol: () => {},
  size: "",
  handSize: () => {}
});


export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // use useEffect to get totals everytime the cartItem changes
  useEffect(() => {
    if (cartItems.length > 0) {
      const total = cartItems.reduce(
        (prev, cur) => prev + cur.itemInCartQuantity * cur.price,
        0
      );
      setCartTotal(total);
    }
  }, [cartItems]);




  const [col, setCol] = useState("");
  const [size, setSize] = useState("");

  const handCol = (e) => {
    setCol(e.target.value);
  };
  const handSize = (e) => {
    setSize(e.target.value);
  };


  const addItemToCart = (productToAdd) => {
    setCartItems(addItem(cartItems, productToAdd, col, size));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };

  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteItem(cartItems, productToDelete));
  };


  const value = {
    isCartOpen,
    cartItems,
    cartTotal,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    col,
    handCol,
    size,
    handSize,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}