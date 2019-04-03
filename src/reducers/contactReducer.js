import { ADD_CONTACT, DELETE_CONTACT } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter((item, index) => index !== action.payload.index);
    default:
      return state;
  }
};
