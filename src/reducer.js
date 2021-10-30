import { combineReducers } from 'redux'
import authentication from './pages/login/reducer'
<<<<<<< HEAD
=======
import blogs from './pages/blog/reducers'
>>>>>>> 872de46814896143ed94ccc0b79d257efb09351f


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
<<<<<<< HEAD
    authentication
=======
    authentication,
    blogs
>>>>>>> 872de46814896143ed94ccc0b79d257efb09351f
  })(state, action)
}