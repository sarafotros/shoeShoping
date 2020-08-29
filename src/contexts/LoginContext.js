import React from 'react'
import { createContext, useReducer } from 'react'
import reducer from '../reducers/LoginReducer'

const LoginContext = createContext({
  state: {
    signIn: false,
    signup: false,
    code: false,
    forgetPassword: false,
    changePassword: false,
  },
  dispatch: () => {},
})
export { LoginContext }

export default function LoginContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    signIn: false,
    signup: false,
    code: false,
    forgetPassword: false,
    changePassword: false,
  })
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  )
}
