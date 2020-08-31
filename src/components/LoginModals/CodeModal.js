import React, { useContext, useEffect, useState } from 'react'
import Modal from '@material-ui/core/Modal'
import useStyles from './index.style'
import { Button, Typography } from '@material-ui/core'
import ReactCodeInput from 'react-code-input'
import { LoginContext } from '../../contexts/LoginContext'
import {
  SIGNUP,
  SIGNIN,
  FORGET_PASSWORD,
  CHANGE_PASSWORD,
} from '../../constants/ActionTypes'

const CodeModal = () => {
  const { state, dispatch } = useContext(LoginContext)
  const [counter, setCounter] = useState(20)
  const classes = useStyles()
  let codeType = localStorage.getItem('loginCodeType')

  useEffect(() => {
    setInterval(() => {
      setCounter((oldCounter) => (oldCounter === 0 ? 0 : oldCounter - 1))
    }, 1000)
  }, [])

  const checkCode = () => {
    if (codeType === 'signUp') {
      //
    } else {
      dispatch({ type: CHANGE_PASSWORD })
    }
  }

  const sendCodeAgain = () => {
    //
    setCounter(20)
  }

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
            onClick={sendCodeAgain}
          >
            <Typography variant="body2" className={classes.buttonText}>
              resend verification code again?
            </Typography>
          </Button>
        )}

        <Button
          disabled={counter === 0}
          className={classes.button}
          fullWidth
          variant="outlined"
          color="primary"
          onClick={checkCode}
        >
          Submit the Code
        </Button>
        <Button
          className={classes.buttonTwo}
          fullWidth
          variant="text"
          color="primary"
          classes={{ label: classes.btnLabel }}
          onClick={() => {
            dispatch({ type: codeType === 'signUp' ? SIGNUP : FORGET_PASSWORD })
          }}
        >
          Edit Phone Number
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
export default CodeModal
