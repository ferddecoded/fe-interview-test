/**
 * Action types
 */

export const SET_SORT_METHOD = 'SET_SORT_METHOD';
export const ADD_TO_CART = 'ADD_TO_CART';

/**
 * Supporting constants
 */

export const SortMethods = {
  AVAILABILITY: 'availability',
  NAME: 'name',
};

/**
 * Action creators
 */

export function setSortMethod(property) {
  return {
    type: SET_SORT_METHOD,
    payload: {
      property,
    },
  };
}

export function addToCart(cartItem) {
  return {
    type: ADD_TO_CART,
    payload: cartItem,
  }
}
