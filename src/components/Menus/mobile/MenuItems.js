import React from 'react'
import useStyles from './MenuItems.styles'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'

import drawerLogo from '../../../assets/images/shoes.svg'
import homeIcon from '../../../assets/images/home.svg'
import productIcon from '../../../assets/images/search.svg'
import blogIcon from '../../../assets/images/edit.svg'
import faqIcon from '../../../assets/images/question.svg'
import contactIcon from '../../../assets/images/chat.svg'
import userIcon from '../../../assets/images/user.svg'

export default function MenuItems() {
  const classes = useStyles()
  const location = useLocation()
  const path = location.pathname

  return (
    <div className={classes.root}>
      <div className={classes.topDrawer}>
        <img src={drawerLogo} alt="shoeShop" className={classes.drawerLogo} />
      </div>
      <div>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <img src={homeIcon} alt="shoeTiqe" className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/' ? 'primary' : 'textSecondary'}
              >
                Main Page
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/products">
            <ListItemIcon>
              <img
                src={productIcon}
                alt="shoeTiqe"
                className={classes.menuIcon}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/products' ? 'primary' : 'textSecondary'}
              >
                PRODUCTS
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem button component={Link} to="/blog">
            <ListItemIcon>
              <img src={blogIcon} alt="shoeTiqe" className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/blog' ? 'primary' : 'textSecondary'}
              >
                BLOG
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem button component={Link} to="/faq">
            <ListItemIcon>
              <img src={faqIcon} alt="shoeTiqe" className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/faq' ? 'primary' : 'textSecondary'}
              >
                FAQ
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem button component={Link} to="/contact">
            <ListItemIcon>
              <img
                src={contactIcon}
                alt="shoeTiqe"
                className={classes.menuIcon}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/contact' ? 'primary' : 'textSecondary'}
              >
                CONTACT US
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img src={userIcon} alt="shoeTiqe" className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2" color="textSecondary">
                LOGIN / SIGN UP
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  )
}
