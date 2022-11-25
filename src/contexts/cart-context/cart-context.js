import { useState, createContext, useEffect } from "react";
// import { useLocation } from "react-router-dom";


// helper functions
<<<<<<< Updated upstream
const addItem = (cartItemArr, productToAdd) => {
=======
const addItem = (cartItemArr, productToAdd, col, size) => {
>>>>>>> Stashed changes
    // function to add item to cart needs to check if item already exist in cart. if it does it increases the quantity otherwise adds the item if its not found in cart

    // check
    const findItem = cartItemArr.find(item => item.id === productToAdd.id);


    // if found, increase itemincartquantity and return the updated array

    if(findItem) {
<<<<<<< Updated upstream
        return cartItemArr.map(item => item.id === productToAdd.id ? {...item, itemInCartQuantity: item.itemInCartQuantity + 1} : item)
    }

    // if item does not exist return a new Cart items array with new product item
    return [...cartItemArr, {...productToAdd, itemInCartQuantity: 1 }];
=======
        
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
>>>>>>> Stashed changes
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
  handSize: () => {},
//   itemInCartQuantity: 0, 
//   setItemInCartQuantity: () => {}
});


export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

<<<<<<< Updated upstream
=======
    // const [itemInCartQuantity, setItemInCartQuantity] = useState(0);



>>>>>>> Stashed changes
    // use useEffect to get totals everytime the cartItem changes
    useEffect(() => {
        const total = cartItems.reduce((prev, cur) => prev + cur.itemInCartQuantity * cur.price, 0);
        setCartTotal(total);
    }, [cartItems]);

    // const location = useLocation()

    // const [path, setPath] = useState(location.pathname);

    // useEffect(() => {
    //     console.log(path)
    //     setPath(location.pathname);
    //     setIsCartOpen(false);
    // }, [path])

    
    // console.log(isCartOpen);


    const [col, setCol] = useState('');
    const [size, setSize] = useState("");

    const handCol = (e) => {
      setCol(e.target.value);
    };
    const handSize = (e) => {
      setSize(e.target.value);
    };

    // setItemInCartQuantity(productToAdd.itemInCartQuantity);
    
    
    // function to add item to cart needs to check if item already exist in cart. if it does it increases the quantity otherwise adds the item if its not found in cart
    const addItemToCart = (productToAdd) => {
<<<<<<< Updated upstream
        setCartItems(addItem(cartItems, productToAdd));
=======
        setCartItems(addItem(cartItems, productToAdd, col, size));
>>>>>>> Stashed changes
    }
    
    // console.log(cartItems)




    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeItem(cartItems, productToRemove));
    }

    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteItem(cartItems, productToDelete))
    }

    // console.log(cartItems);

    // const value = {isCartOpen, cartItems, cartTotal, setIsCartOpen,addItemToCart, removeItemFromCart, deleteItemFromCart};
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

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}