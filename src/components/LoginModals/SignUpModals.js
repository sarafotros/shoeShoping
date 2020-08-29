import React, { useContext } from 'react'
import useStyles from './index.style'
import { TextField, Button, Grid, Modal } from '@material-ui/core'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNIN, CODE } from '../../constants/ActionTypes'

const SignUpModal = () => {
  const { state, dispatch } = useContext(LoginContext)
  const classes = useStyles()

  return (
    <Modal open={state.signUp} onClose={() => dispatch({ type: 'closeAll' })}>
      <div className={classes.rootSignUp}>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <TextField
            label="Username"
            classes={{ root: classes.inputContainer }}
            variant="outlined"
            fullWidth
            size="small"
            // inputProps={{ className: classes.input }}
          />
        </Grid>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <TextField
            label="Mobile Number"
            classes={{ root: classes.inputContainer }}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <TextField
            label="Password"
            classes={{ root: classes.inputContainer }}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <TextField
            label="Repeat Password"
            classes={{ root: classes.inputContainer }}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid className={classes.formGrid} item lg={12} xs={12}>
          <Button
            className={classes.button}
            fullWidth
            variant="outlined"
            color="primary"
          >
            Sign Up
          </Button>
        </Grid>
        <Grid className={classes.formGrid} item lg={12} xs={12}>
          <Button
            className={classes.buttonTwo}
            fullWidth
            variant="text"
            color="primary"
            classes={{ label: classes.btnLabel }}
          >
            Welcome Back! Please Sign In
          </Button>
        </Grid>
      </div>
    </Modal>
  )
}
export default SignUpModal
