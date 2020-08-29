import React, { useContext, useEffect, useState } from 'react'
import Modal from '@material-ui/core/Modal'
import useStyles from './index.style'
import { Button, Typography } from '@material-ui/core'
import ReactCodeInput from 'react-code-input'
import { LoginContext } from '../../contexts/LoginContext'

const CodeModal = () => {
  const { state, dispatch } = useContext(LoginContext)
  const [counter, setCounter] = useState(10)
  const classes = useStyles()
  useEffect(() => {
    setInterval(() => {
      setCounter((oldCounter) => (oldCounter === 0 ? 0 : oldCounter - 1))
    }, 1000)
  }, [])
  return (
    <Modal open={state.code} onClose={() => dispatch({ type: 'closeAll' })}>
      <div className={classes.root}>
        <Typography variant="body2" className={classes.textType}>
          Enter the verification code You received
        </Typography>
        <div className={classes.codeDiv}>
          <ReactCodeInput
            fields={5}
            inputStyle={{
              backgroundColor: '#2a3a48',
              width: 35,
              margin: 5,
              height: 35,
              border: 'none',
              textAlign: 'center',
              color: '#fff',
              fontSize: 18,
            }}
          />
        </div>
        {counter !== 0 ? (
          <Typography variant="body2" className={classes.counterText}>
            code expires in " {counter} " second
          </Typography>
        ) : (
          <Button
            variant="text"
            fullWidth
            color="primary"
            className={classes.sendCodeButton}
          >
            <Typography variant="body2" className={classes.buttonText}>
              resend verification code again?
            </Typography>
          </Button>
        )}

        <Button
          className={classes.button}
          fullWidth
          variant="outlined"
          color="primary"
        >
          Verify the Code
        </Button>
        <Button
          className={classes.buttonTwo}
          fullWidth
          variant="text"
          color="primary"
          classes={{ label: classes.btnLabel }}
        >
          Edit Phone Number
        </Button>
        <Button
          className={classes.buttonTwo}
          fullWidth
          variant="text"
          color="primary"
          classes={{ label: classes.btnLabel }}
        >
          Back to Login
        </Button>
      </div>
    </Modal>
  )
}
export default CodeModal
