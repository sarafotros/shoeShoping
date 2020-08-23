import React, { useState } from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import useStyles from './index.styles'
import MenuIcon from '../../../assets/images/menu22.svg'
import brandIcon from '../../../assets/images/brand4.png'
import CartButton from '../desktop/CartButton'
import MenuItems from './MenuItems'

export default function Mobile() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const toggleOpenMenu = () => {
    setOpen(!open)
  }
  return (
    <div className={classes.root}>
      <div className={classes.rightMenu} onClick={toggleOpenMenu}>
        <img src={MenuIcon} alt="menu" className={classes.menuIconTop} />
      </div>
      <div className={classes.centerMenu}>
        <img src={brandIcon} alt="menu" className={classes.brandIcon} />
      </div>
      <div className={classes.leftMenu}>
        <CartButton />
      </div>
      <SwipeableDrawer
        onClose={toggleOpenMenu}
        onOpen={toggleOpenMenu}
        open={open}
      >
        <MenuItems />
      </SwipeableDrawer>
    </div>
  )
}
