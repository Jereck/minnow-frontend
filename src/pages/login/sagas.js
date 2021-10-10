import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { clientNest } from '../../graphql'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'
import gql from 'graphql-tag';


const loginMutation = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      id
      firstName
      lastName
      email
      userName
      token
    }
  }
`

// graphql mutation
const fetchUserMutation = async (userName, password) => {
  console.log(userName, password)
  return clientNest.mutate({
    mutation: loginMutation, 
    variables: {
      userName,
      password
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


function* mySaga() {
  yield takeEvery(LOGIN_REQUEST, fetchUser);
}


export default [
  mySaga
]