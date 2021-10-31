import { SIGN_UP_REQUEST } from "./constants"

export const signUpUser = (data) => ({ type: SIGN_UP_REQUEST, payload: data })
