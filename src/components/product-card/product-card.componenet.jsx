// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import './product-card.styles.tsx';
import { useDispatch } from 'react-redux';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
  ProductCardContainer,
  Footer,
  Name,
  ProductCartButton,
  Price,
} from './product-card.styles';

// import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ProductCartButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </ProductCartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
