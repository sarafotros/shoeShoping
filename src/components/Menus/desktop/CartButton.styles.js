import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    width: 80,
    height: '100%',
    // border: '1px #202d2a solid',
    // boxShadow: '2px 3px 4px 0px #272b2b',
    cursor: 'pointer',
    transition: '0.5s',
    position: 'relative',
    '&:hover': {
      opacity: 0.7,
      transition: '0.5s',
    },
  },
  shopIcon: {
    fontSize: 32,
    color: theme.palette.icon.shopIcon,
  },
  badge: {
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'tomato',
    position: 'absolute',
    top: 4,
    right: 12,
  },
}))
