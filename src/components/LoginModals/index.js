import React from 'react'
import SignInModal from './SignInModal'
import SignUpModals from './SignUpModals'
import CodeModal from './CodeModal'
import ForgetPasswordModal from './ForgetPasswordModal'
import ChangePasswordModal from './ChangePasswordModal'

const index = () => {
  return (
    <>
      <SignInModal />
      <SignUpModals />
      <ForgetPasswordModal />
      <ChangePasswordModal />
      <CodeModal />
    </>
  )
}

export default index
