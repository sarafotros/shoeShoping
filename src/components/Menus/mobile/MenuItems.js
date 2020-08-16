import React from 'react'
import useStyles from './MenuItems.styles'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import drawerLogo from '../../../assets/images/shoes.svg'
import homeIcon from '../../../assets/images/home.svg'

export default function MenuItems() {
  const classes = useStyles()

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
              <Typography variant="body2" color="primary">
                Main Page
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  )
}
