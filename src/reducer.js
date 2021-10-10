import { combineReducers } from 'redux'
import authentication from './pages/login/reducer'


const initialState = {
 
}

function context (state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}


export default (state = initialState, action) => {

  return combineReducers({
    authentication
  })(state, action)
}