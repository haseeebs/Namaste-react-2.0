import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantMenuItem from '../components/restaurant/RestaurantMenuItem';
import { clearCart } from '../slices/cartSlice';

const CartScreen = () => {

  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <div className="cart-screen">
        <div className="category">
          <button onClick={handleClearCart} className='buttons clear-cart-button'>Clear Cart</button>
          {cartItems.length === 0 && <h2 className='clear-cart-length'>Your cart is empty!</h2>}
          {cartItems.map(item => (
            <RestaurantMenuItem key={item.card.info.id} item={item} />
          ))}

        </div>
      </div>
    </>
  )
}

export default CartScreen