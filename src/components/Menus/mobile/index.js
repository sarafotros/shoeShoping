import React from 'react'
import useStyles from './index.styles'
import MenuIcon from '../../../assets/images/menu2.svg'
import brandIcon from '../../../assets/images/brand4.png'
import CartButton from '../desktop/CartButton'

export default function Mobile() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.rightMenu}>
        <img src={MenuIcon} alt="menu" className={classes.menuIcon} />
      </div>
      <div className={classes.centerMenu}>
        <img src={brandIcon} alt="menu" className={classes.brandIcon} />
      </div>
      <div className={classes.leftMenu}>
        <CartButton />
      </div>
    </div>
  )
}
