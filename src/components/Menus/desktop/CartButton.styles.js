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
  },
  topDiv: {
    cursor: 'pointer',
    transition: '.5s',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      opacity: 0.5,
      transition: '.5s',
    },
    [theme.breakpoints.down('xs')]: {
      '&:hover': {
        opacity: 1,
        transition: '.5s',
      },
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
    top: -6,
    right: -6,
  },
  cartContent: {
    width: 300,
    backgroundColor: '#2d3844',
    position: 'absolute',
    top: 72,
    right: 5,
    borderRadius: 5,
    padding: 15,
    boxShadow: '0px 0px 1px 0px #57b0d6',
    zIndex: 1,
  },
  priceDiv: {
    padding: 10,
    borderBottomColor: theme.palette.border.cartItemBorder,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 10,
  },
}))
