import React from 'react'
import useStyles from './index.styles'
import { Button } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import BrandLogo1 from '../../../assets/images/brand5.png'
import ProfileButton from './ProfileButton'
import CartButton from './CartButton'

export default function Desktop() {
  const classes = useStyles()
  const location = useLocation()
  const path = location.pathname

  return (
    <div className={classes.root}>
      <div className={classes.brandDiv}>
        <img className={classes.brandImg} src={BrandLogo1} alt="brand-logo" />
      </div>
      <div className={classes.menuDiv}>
        <div
          className={classes.activeMenuDiv}
          className={path === '/' ? classes.activeMenuDiv : null}
        >
          <Button
            component={Link}
            to="/"
            className={path === '/' ? classes.activeMenu : classes.inActiveMenu}
          >
            HOME
          </Button>
        </div>
        <div
          className={classes.activeMenuDiv}
          className={path === '/products' ? classes.activeMenuDiv : null}
        >
          <Button
            component={Link}
            to="/products"
            className={
              path === '/products' ? classes.activeMenu : classes.inActiveMenu
            }
          >
            PRODUCTS
          </Button>
        </div>
        <div
          className={classes.activeMenuDiv}
          className={path === '/blog' ? classes.activeMenuDiv : null}
        >
          <Button
            component={Link}
            to="/blog"
            className={
              path === '/blog' ? classes.activeMenu : classes.inActiveMenu
            }
          >
            BLOG
          </Button>
        </div>
        <div
          className={classes.activeMenuDiv}
          className={path === '/faq' ? classes.activeMenuDiv : null}
        >
          <Button
            component={Link}
            to="/faq"
            className={
              path === '/faq' ? classes.activeMenu : classes.inActiveMenu
            }
          >
            FAQ
          </Button>
        </div>
        <div
          className={classes.activeMenuDiv}
          className={path === '/contact' ? classes.activeMenuDiv : null}
        >
          <Button
            component={Link}
            to="/contact"
            className={
              path === '/contact' ? classes.activeMenu : classes.inActiveMenu
            }
          >
            CONTACT US
          </Button>
        </div>
      </div>

      <div className={classes.leftMenuDive}>
        <ProfileButton />
        <CartButton />
      </div>
    </div>
  )
}
