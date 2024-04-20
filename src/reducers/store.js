import { createStore } from 'redux';
import { LOGIN_SUCCESS } from '../actions/actions'; 

const initialState = {
  user_id: null,
  username: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user_id: action.payload.user_id,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
