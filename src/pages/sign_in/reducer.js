import { 
  SIGN_UP_REQUEST,
  REGISTER_SUCCESS,
 } from './constants';

const initialState = {
  loggedIn: false,
  user: {}
}

export default function registration(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.user
      };
    default:
      return state
  }
}