import React from 'react'
import useStyles from './index.styles'

import BrandLogo1 from '../../../assets/images/brand5.png'
import { Button } from '@material-ui/core'

export default function Desktop() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.brandDiv}>
        <img className={classes.brandImg} src={BrandLogo1} alt="brand-logo" />
      </div>
      <div className={classes.menuDiv}>
        <Button>HOME</Button>
      </div>
    </div>
  )
}
