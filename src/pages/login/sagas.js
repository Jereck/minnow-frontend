import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { clientNest } from '../../graphql'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'
import { loginMutation, registerUserMutation } from '../../mutations_queries/login'

// Client provides mutate/query methods that we can pass graphql template strings to
// mutate/query can take variables/input
// should return a promise 

const fetchUserMutation = (userName, password) => {
  return clientNest.mutate({
    mutation: loginMutation, 
    variables: {
      userName,
      password
  }})
}

const createUserMutation = (data) => {
  return clientNest.mutate({
    mutation: registerUserMutation, 
    variables: {
      user: data
  }})
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   const { userName, password } =  action.payload
   try {
      const user = yield call(fetchUserMutation, userName, password);
      console.log('user response', user)
      yield put({type: LOGIN_SUCCESS, user: user});
   } catch (error) {
      yield put({type: LOGIN_FAILURE, message: error});
   }
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* createUser(action) {
  const { email, password, firstName, lastName, userName } =  action.payload

  const data = { email, password, firstName, lastName, userName }
  try {
     const user = yield call(createUserMutation, data);
     console.log('user response', user)
     yield put({type: 'REGISTER_SUCCESS', user: user});
  } catch (error) {
     yield put({type: 'REGISTER_FAILURE', message: error});
  }
}


//  listens to requests that are being dispatched
// allows us to pass the request type
// and a function that will handle that request
function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, fetchUser)
}


function* registrationSaga() {
  yield takeEvery('USER_REGISTRATION', createUser);
}


export default [
  loginSaga,
  registrationSaga
]


