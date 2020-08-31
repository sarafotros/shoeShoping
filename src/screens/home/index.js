import React from 'react'
import useStyle from './index.styles'
import Slider from '../../components/Slider/index'
import { Container, Grid } from '@material-ui/core'

export default function Index() {
  const classes = useStyle()

  return (
    <Container maxWidth="lg">
      <Grid className={classes.topGrid} container direction="row">
        <Grid className={classes.sliderGrid} item lg={5}>
          <Slider />
        </Grid>
        <Grid className={classes.brandGrid} item lg={7}>
          brands
        </Grid>
      </Grid>
      <Grid className={classes.itemsGrid} container>
        Back To School
      </Grid>
      <Grid className={classes.itemsGrid} container>
        New Arrivals
      </Grid>
    </Container>
  )
}
