import React, { useContext } from 'react'
import Modal from '@material-ui/core/Modal'
import useStyles from './index.style'
import { TextField, Button } from '@material-ui/core'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNIN } from '../../constants/ActionTypes'

const ChangePasswordModal = () => {
  const { state, dispatch } = useContext(LoginContext)

  const classes = useStyles()
  return (
    <Modal
      open={state.changePassword}
      onClose={() => dispatch({ type: 'closeAll' })}
    >
      <div className={classes.root}>
        <TextField
          label="New Password"
          classes={{ root: classes.inputContainer }}
          variant="outlined"
          fullWidth
          size="small"
        />
        <TextField
          label="Repeat Password"
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
          Rest Password
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
      </div>
    </Modal>
  )
}
export default ChangePasswordModal
