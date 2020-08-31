import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './index.styles'
import Title from '../TitleWithBottomBorder'

export default function Index() {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container direction="rom">
      <Grid className={classes.item} item lg={3}>
        <Title title="My Shoetiqe.com" />
      </Grid>
      <Grid className={classes.item} item lg={3}>
        <Title title="About Us" />
      </Grid>
      <Grid className={classes.item} item lg={3}>
        <Title title="Need Some Help?" />
      </Grid>
      <Grid className={classes.item} item lg={3}>
        <Title title="The Small Details" />
      </Grid>
    </Grid>
  )
}
