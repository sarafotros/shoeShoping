import React, { useState, useContext } from 'react'
import Avatar from '../../../assets/images/user.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStyles from './ProfileButton.styles'
import { Button, Fade } from '@material-ui/core'
import { LoginContext } from '../../../contexts/LoginContext'
import { SIGNUP, SIGNIN } from '../../../constants/ActionTypes'

const ProfileButton = () => {
  const { dispatch } = useContext(LoginContext)
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <div className={classes.root}>
      <div className={classes.topDiv} onClick={() => setOpen(!open)}>
        <ExpandMoreIcon className={classes.BottomIcon} />
        <img src={Avatar} alt="avatar" className={classes.profileImg} />
      </div>

      <Fade in={open}>
        <div className={classes.menuContent}>
          {localStorage.token ? (
            <>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
              >
                Profile
              </Button>
              <Button variant="text" color="primary" size="medium" fullWidth>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                onClick={() => {
                  setOpen(false)
                  dispatch({ type: SIGNIN })
                }}
              >
                Sign In
              </Button>
              <Button
                variant="text"
                color="primary"
                size="medium"
                fullWidth
                onClick={() => {
                  setOpen(false)
                  dispatch({ type: SIGNUP })
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </Fade>
    </div>
  )
}
export default ProfileButton
