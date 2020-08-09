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
    transition: '.5s',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      opacity: 0.5,
      transition: '.5s',
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
  menuContent: {
    width: 200,
    backgroundColor: '#2d3844',
    position: 'absolute',
    top: 72,
    borderRadius: 5,
    padding: 15,
    boxShadow: '0px 0px 1px 0px #57b0d6',
    zIndex: 1,
  },
}))
