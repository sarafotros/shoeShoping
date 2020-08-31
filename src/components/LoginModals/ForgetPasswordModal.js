import React, { useContext } from 'react'
import Modal from '@material-ui/core/Modal'
import useStyles from './index.style'
import { TextField, Button } from '@material-ui/core'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNIN, SIGNUP, CODE } from '../../constants/ActionTypes'

const ForgetPasswordModal = () => {
  const { state, dispatch } = useContext(LoginContext)
  const classes = useStyles()
  const forgetPassword = () => {
    dispatch({ type: CODE })
  }
  return (
    <Modal
      open={state.forgetPassword}
      onClose={() => dispatch({ type: 'closeAll' })}
    >
      <div className={classes.root}>
        <TextField
          label="Phone Number"
          classes={{ root: classes.inputContainer }}
          variant="outlined"
          fullWidth
          size="small"
        />
        <Button
          className={classes.button}
          fullWidth
          variant="outlined"
          color="primary"
          onClick={forgetPassword}
        >
          Forget Password
        </Button>
        <Button
          className={classes.buttonTwo}
          fullWidth
          variant="text"
          color="primary"
          classes={{ label: classes.btnLabel }}
          onClick={() => dispatch({ type: SIGNIN })}
        >
          Back to Login
        </Button>
        <Button
          className={classes.buttonTwo}
          fullWidth
          variant="text"
          color="primary"
          classes={{ label: classes.btnLabel }}
          onClick={() => dispatch({ type: SIGNUP })}
        >
          New here? Create Account
        </Button>
      </div>
    </Modal>
  )
}
export default ForgetPasswordModal
