// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../store/cart/cart.types';
import { FC, memo } from 'react';

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
});

export default CheckoutItem;