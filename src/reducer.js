import { combineReducers } from 'redux'
import authentication from './pages/login/reducer'
import blogs from './pages/blog/reducers'
import registration from './pages/sign_in/reducer'


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
    authentication,
    blogs,
    registration
  })(state, action)
}