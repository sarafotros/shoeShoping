import React, { useContext } from 'react'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import CodeModal from './CodeModal'
import ForgetPasswordModal from './ForgetPasswordModal'
import ChangePasswordModal from './ChangePasswordModal'
import { LoginContext } from '../../contexts/LoginContext'

const Index = () => {
  const { state } = useContext(LoginContext)

  return (
    <>
      {state.signIn ? <SignInModal /> : null}
      {state.signUp ? <SignUpModal /> : null}
      {state.forgetPassword ? <ForgetPasswordModal /> : null}
      {state.changePassword ? <ChangePasswordModal /> : null}
      {state.code ? <CodeModal /> : null}
    </>
  )
}

export default Index
