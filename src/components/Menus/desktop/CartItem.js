import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './CartItem.styles'
import DeleteIcon from '../../../assets/images/delete.svg'
import ShoeImg from '../../../assets/images/con2.png'

export default function CartItem() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.rightContent}>
        <img src={ShoeImg} alt="" className={classes.shoesImg} />
        <div className={classes.descDiv}>
          <Typography variant="h6" color="textPrimary">
            Adidas
          </Typography>
          <div className={classes.DeleteDiv}>
            <Typography variant="subtitle2" color="initial">
              £68
            </Typography>
            <img className={classes.deleteIcon} src={DeleteIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
