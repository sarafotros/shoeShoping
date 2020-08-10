import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import useStyles from './CartButton.styles'
import { Typography, Button, Fade } from '@material-ui/core'
import CartItem from './CartItem'

const CartButton = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <div className={classes.root}>
      <div className={classes.topDiv} onClick={() => setOpen(!open)}>
        <ShoppingCartIcon className={classes.shopIcon} />
        <div className={classes.badge}>
          <Typography variant="subtitle2" color="textPrimary">
            2
          </Typography>
        </div>
      </div>
      <Fade in={open}>
        <div className={classes.cartContent}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <div className={classes.priceDiv}>
            <Typography variant="body2" color="textPrimary">
              Total:
            </Typography>
            <Typography variant="h6" color="textPrimary">
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
      </Fade>
    </div>
  )
}
export default CartButton
