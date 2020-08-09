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
    '&:hover': {
      opacity: 0.7,
      transition: '0.5s',
    },
  },
  profileImg: {
    width: 38,
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 40,
  },
  BottomIcon: {
    fontSize: 27,
    color: theme.palette.icon.shopIcon,
  },
}))
