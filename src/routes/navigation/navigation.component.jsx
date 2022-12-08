import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as MeCrownLogo } from '../../assets/crown.svg';
// import { UserContext } from '../../contexts/user.context';
// import { CartContext } from '../../contexts/cart.context';

import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { selectCurrentUser } from '../../store/user/user.selector';

// import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <MeCrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
