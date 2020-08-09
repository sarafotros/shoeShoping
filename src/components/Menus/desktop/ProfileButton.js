import React, { useState } from 'react'
import Avatar from '../../../assets/images/user.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStyles from './ProfileButton.styles'
import { Button, Fade } from '@material-ui/core'

const ProfileButton = () => {
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
              >
                Sign In
              </Button>
              <Button variant="text" color="primary" size="medium" fullWidth>
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
