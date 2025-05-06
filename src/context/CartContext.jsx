
import { createContext, useContext, useState } from "react";


const CartContext = createContext({})

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }){
    const [cartItem, setCartItem] = useState([])

    function removeFromCart(id, size) {
      setCartItem (currItems => { return currItems.filter(item => !(item.id === id && item.size === size))})
    }


    function increaseCartQuantity(id, size) {
      setCartItem(prev =>
        prev.map(item =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }


    function decreaseCartQuantity(id, size){
      setCartItem (currItems => {
            if (currItems.find(item => item.id === id && item.size === size)?.quantity === 1){
              return currItems.filter(item => !(item.id === id && item.size === size))
            }
            return currItems.map(item =>
              item.id === id && item.size === size
              ? { ...item, quantity: item.quantity - 1 }
              : item
            )
            
          })
        }
       
    function addToCart(id, product, size, category, quantity) {
        setCartItem(prev => {
          const exists = prev.find(item => item.id === id && item.size === size);
          if (exists) {
            return prev.map(item =>
              item.id === id && item.size === size
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          }
          return [...prev, { id: id, product: product, size: size, category: category, quantity: quantity }];
        });
    }
  


    return (
    <CartContext.Provider value={{cartItem, addToCart, decreaseCartQuantity, increaseCartQuantity, removeFromCart}}>
        {children}
    </CartContext.Provider>
    )
}

