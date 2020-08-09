import React from 'react'
import Avatar from '../../../assets/images/user.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStyles from './ProfileButton.styles'

const ProfileButton = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ExpandMoreIcon className={classes.BottomIcon} />
      <img src={Avatar} alt="avatar" className={classes.profileImg} />
    </div>
  )
}
export default ProfileButton
