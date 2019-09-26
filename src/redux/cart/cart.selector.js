import { createSelector } from "reselect";

const cartSelector = state => state.cart;

//first argument of createSelector is a collection of input selector

export const cartItemsSelector = createSelector(
  [cartSelector],
  cart => cart.cartItems
);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  cartItems =>
    cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
);

export const cartDisplaySelector = createSelector(
  [cartSelector],
  cart => cart.hidden
);

export const cartItemsTotalSelector = createSelector(
  [cartItemsSelector],
  cartItems =>
    cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.price * cartItem.quantity;
    }, 0)
);
