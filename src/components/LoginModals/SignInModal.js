import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import useStyles from './index.style'
import { TextField, Button } from '@material-ui/core'

const SignInModal = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
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
        >
          Forgot Password
        </Button>
        <Button
          className={classes.buttonTwo}
          fullWidth
          variant="text"
          color="primary"
          classes={{ label: classes.btnLabel }}
        >
          New here? Create Account
        </Button>
      </div>
    </Modal>
  )
}
export default SignInModal
