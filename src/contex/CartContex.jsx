import { createContext, useContext } from "react";

const CartContext = createContext({})

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }){
    const [cartItem, setCartItem] = useState([])

    function getItemQuantity(id){
        return cartItem.find( item => item.id === id)?.quantity || 0
    }
    function increaseCartQuantity(id){
        setCartItem (currItems => {
            if (curriIems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity:1}]
            }else {
                return currItems.map(items =>{
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }

                })
            }

        })
        return cartItem
    }
    function decreaseCartQuantity(id){
        setCartItem (currItems => {
            if (curriIems.find(item => item.id === id)?.quantity ===1){
                return currItems.filter(item => item.id !== id)
            }else {
                return currItems.map(items =>{
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    }

                })
            }

        })
        return cartItem
    }

    function removeFromCart(id){
        setCartItem(cartItem =>{
            return cartItem.filter(item => item.id !== id); 
        })
    }
  
    return 
    <CartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
        {children}
    </CartContext.Provider>
}

