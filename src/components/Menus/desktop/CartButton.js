import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import useStyles from './CartButton.styles'
import { Typography } from '@material-ui/core'

const CartButton = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ShoppingCartIcon className={classes.shopIcon} />
      <div className={classes.badge}>
        <Typography variant="subtitle2" color="textPrimary">
          2
        </Typography>
      </div>
    </div>
  )
}
export default CartButton
