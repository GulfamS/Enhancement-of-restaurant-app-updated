import {createContext} from 'react'

const CartContext = createContext({
  cartList: [],
  addCartItems: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
