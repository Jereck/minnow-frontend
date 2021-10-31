import { LOGIN_REQUEST } from './constants'

export const createLogin = (data) => ({ type:LOGIN_REQUEST, payload: data })
export const logUserOut = () => ({ type: 'LOG_OUT_REQUEST'})
