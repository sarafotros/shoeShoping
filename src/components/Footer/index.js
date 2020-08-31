import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import useStyles from './index.styles'
import Title from '../TitleWithBottomBorder'

export default function Index() {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container direction="rom">
      <Grid className={classes.item} item lg={3} xs={12}>
        <Title title="My Shoetiqe.com" />
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          Create Account
        </Typography>
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          Herbal House, 10 Back Hill
        </Typography>
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          London EC1R 5EN UK
        </Typography>
      </Grid>
      <Grid className={classes.item} item lg={3} xs={12}>
        <Title title="About Us" />
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          Our Story
        </Typography>
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          Corporate Social Responsibility
        </Typography>
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          Job Opportunities
        </Typography>
      </Grid>
      <Grid className={classes.item} item lg={3} xs={12}>
        <Title title="Brands" />
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="primary"
          >
            Converse
          </Typography>
        </Button>
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="primary"
          >
            NIKE
          </Typography>
        </Button>
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="primary"
          >
            Adidas
          </Typography>
        </Button>
      </Grid>
      <Grid className={classes.item} item lg={3} xs={12}>
        <Title title="Need Some Help?" />
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="primary"
          >
            Where is My Order
          </Typography>
        </Button>
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="primary"
          >
            Delivery Information
          </Typography>
        </Button>
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="primary"
          >
            FAQ
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}
