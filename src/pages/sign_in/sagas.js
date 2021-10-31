import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { clientNest } from '../../graphql'
import { 
  SIGN_UP_REQUEST, 
  REGISTER_SUCCESS, 
  REGISTER_FAILURE 
} from './constants'
import { registerUserMutation } from '../../mutations_queries/login'

const createUserMutation = (data) => {
  return clientNest.mutate({
    mutation: registerUserMutation, 
    variables: {
      user: data
  }})
}


function* createUser(action) {
  const { email, password, firstName, lastName, userName } =  action.payload

  const data = { email, password, firstName, lastName, userName }
  try {
     const user = yield call(createUserMutation, data);
     yield put({type: REGISTER_SUCCESS, user: user});
  } catch (error) {
     yield put({type: REGISTER_FAILURE, message: error});
  }
}

function* signUpSaga() {
  yield takeEvery(SIGN_UP_REQUEST, createUser)
}

export default [
  signUpSaga
]


