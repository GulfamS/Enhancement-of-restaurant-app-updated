import {useContext} from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = ({cartItemDetails}) => {
  const {
    dishId,
    dishName,
    dishImage,
    quantity,
    dishCurrency,
    dishPrice,
  } = cartItemDetails

  const {
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeCartItem,
  } = useContext(CartContext)

  const onIncrementQuantity = () => incrementCartItemQuantity(dishId)

  const onDecrementQuantity = () => decrementCartItemQuantity(dishId)

  const onRemoveCartItems = () => removeCartItem(dishId)

  return (
    <li className="cart-items-container">
      <img className="cart-item-image" src={dishImage} alt={dishName} />
      <div className="cart-item-details">
        <p className="cart-item-name">{dishName}</p>
        <p className="dish-currency-price">
          {dishCurrency} {(quantity * dishPrice).toFixed(2)}
        </p>
        <div className="controle-btn-group">
          <button
            type="button"
            className="control-btn"
            onClick={onDecrementQuantity}
          >
            -
          </button>
          <p className="cart-item-quantity">{quantity}</p>
          <button
            type="button"
            className="control-btn"
            onClick={onIncrementQuantity}
          >
            +
          </button>
        </div>
      </div>
      <button type="button" className="remove-btn" onClick={onRemoveCartItems}>
        <FaRegTrashAlt />
      </button>
    </li>
  )
}

export default CartItem
