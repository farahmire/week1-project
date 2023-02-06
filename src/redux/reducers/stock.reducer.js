import { combineReducers } from 'redux';

const stock = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PRICE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  stock,
});