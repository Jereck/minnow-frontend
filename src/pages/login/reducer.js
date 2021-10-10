import { 
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USERS_LOGOUT
 } from './constants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  loggedIn: false,
  user: {}
}
  // user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {};
    case USERS_LOGOUT:
      return {};
    default:
      return state
  }
}