import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: 250,
    height: '100%',
    backgroundColor: '#131a21',
    padding: 10,
  },
  topDrawer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: theme.palette.border.drawerItemBorder,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
  drawerLogo: {
    width: 50,
    height: 50,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
}))
