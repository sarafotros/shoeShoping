import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Hidden } from '@material-ui/core'
import useStyle from './MasterLayout.styles'
import DesktopMenu from '../components/Menus/desktop'
import MobileMenu from '../components/Menus/mobile'
import Footer from '../components/Footer/index'
import LoginModals from '../components/LoginModals'

export default function MasterLayout() {
  const classes = useStyle()
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Hidden xsDown>
          <DesktopMenu />
        </Hidden>
        <Hidden smUp>
          <MobileMenu />
        </Hidden>

        <Footer />
      </div>
      <LoginModals />
    </BrowserRouter>
  )
}
