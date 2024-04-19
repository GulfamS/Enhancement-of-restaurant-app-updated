import {useContext} from 'react'
import Header from '../Header'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import './index.css'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)

  const renderEmptyView = () => (
    <div className="empty-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        alt="empty view"
        className="empty-img"
      />
      <p className="empty-text">Your cart is empty</p>
    </div>
  )

  const renderCartItem = () => (
    <>
      <div className="cart-items-container">
        <h1 className="cart-item-header">Cart Items</h1>
        <button
          type="button"
          className="remove-btn"
          onClick={removeAllCartItems}
        >
          Remove All
        </button>
      </div>
      <div>
        <ul className="cart-items">
          {cartList.map(dish => (
            <CartItem key={dish.dishId} cartItemDetails={dish} />
          ))}
        </ul>
      </div>
    </>
  )

  return (
    <div className="cart-page-container">
      <Header />
      <div className="cart-body-container">
        {cartList.length === 0 ? renderEmptyView() : renderCartItem()}
      </div>
    </div>
  )
}

export default Cart
