import { combineReducers } from 'redux';
import { ADD_TO_CART } from './actions';

// this is a no-op reducer
export function cars(state = [], action) {
  return state;
}

export function sortMethod(state, action) {
  if(action && action.payload && action.payload.property) {
    return { sortMethod: action.payload.property };
  }
  return { ...state };
}

export function cart(state = [], action) {
  const { payload, type } = action;
  switch(type) {
    case ADD_TO_CART:
      return [...state, payload];
    default:
      return [...state];
  }
}

export default combineReducers({ sortMethod, cars, cart });
