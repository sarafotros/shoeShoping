import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import useStyles from './CartButton.styles'
import { Typography, Button } from '@material-ui/core'
import CartItem from './CartItem'

const CartButton = () => {
  const classes = useStyles()
  // const [open, setOpen] = useState(false)

  return (
    <div className={classes.root}>
      <div className={classes.topDiv}>
        <ShoppingCartIcon className={classes.shopIcon} />
        <div className={classes.badge}>
          <Typography variant="subtitle2" color="textPrimary">
            2
          </Typography>
        </div>
      </div>

      <div className={classes.cartContent}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div>
          <Typography variant="h6" color="primary">
            Total:
          </Typography>
          <Typography variant="h6" color="primary">
            £230
          </Typography>
        </div>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          size="medium"
          className={classes.button}
        >
          Show Items
        </Button>
      </div>
    </div>
  )
}
export default CartButton
