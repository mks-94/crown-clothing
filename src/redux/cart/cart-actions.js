import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEMS_FROM_CART,
} from "./cart-actionTypes";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearItemsFromCart = (item) => ({
  type: CLEAR_ITEMS_FROM_CART,
  payload: item,
});
