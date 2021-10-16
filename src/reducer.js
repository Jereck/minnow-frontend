import { combineReducers } from 'redux'
import authentication from './pages/login/reducer'
import blogs from './pages/blog/reducers'


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
    blogs
  })(state, action)
}