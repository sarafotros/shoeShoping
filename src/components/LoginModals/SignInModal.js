import React, { useContext } from 'react'
import Modal from '@material-ui/core/Modal'
import useStyles from './index.style'
import { TextField, Button } from '@material-ui/core'
import { LoginContext } from '../../contexts/LoginContext'
import { FORGET_PASSWORD, SIGNUP } from '../../constants/ActionTypes'

const SignInModal = () => {
  const { state, dispatch } = useContext(LoginContext)

  const classes = useStyles()
  return (
    <Modal open={state.signIn} onClose={() => dispatch({ type: 'closeAll' })}>
      <div className={classes.root}>
        <TextField
          label="Mobile Number"
          classes={{ root: classes.inputContainer }}
          variant="outlined"
          fullWidth
          size="small"
          // inputProps={{ className: classes.input }}
        />
        <TextField
          label="Password"
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
        >
          Sign In
        </Button>
        <Button
          className={classes.buttonTwo}
          fullWidth
          variant="text"
          color="primary"
          classes={{ label: classes.btnLabel }}
          onClick={() => dispatch({ type: FORGET_PASSWORD })}
        >
          Forgot Password
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
export default SignInModal
