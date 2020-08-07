import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Hidden, Button } from '@material-ui/core'
import useStyle from './MasterLayout.styles'
import DesktopMenu from '../components/Menus/desktop'
import MobileMenu from '../components/Menus/mobile'
import Footer from '../components/Footer/index'

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
        <Button variant="contained" color="primary">
          click
        </Button>
        <Button variant="contained" color="secondary">
          click
        </Button>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
