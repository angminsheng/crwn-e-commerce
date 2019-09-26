import { cartActionsType } from "./cart.types";
export const toggleCartHidden = () => {
  return {
    type: cartActionsType.TOGGLE_CART_HIDDEN
  };
};

export const addCartItem = item => {
  return {
    type: cartActionsType.ADD_CART_ITEM,
    payload: item
  };
};

export const clearItemFromCart = id => {
  return {
    type: cartActionsType.CLEAR_ITEM_FROM_CART,
    payload: id
  };
};

export const removeCartItem = id => {
  return {
    type: cartActionsType.REMOVE_CART_ITEM,
    payload: id
  };
};
