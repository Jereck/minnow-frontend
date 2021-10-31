import loginSagas from './pages/login/sagas'
import signUpSagas from './pages/sign_in/sagas'

export default [
  ...loginSagas,
  ...signUpSagas
]