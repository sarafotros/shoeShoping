import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 70,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandDiv: {
    width: 150,
    marginRight: 30,
  },
  brandImg: {
    width: '100%',
  },
  menuDiv: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
  activeMenu: {
    color: theme.palette.text.primary,
  },
  inActiveMenu: {
    color: theme.palette.text.inActiveMenu,
  },
  activeMenuDiv: {
    borderBottomColor: '#00c1c9',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderRadius: 2,
  },
  leftMenuDive: {
    height: '100%',
    paddingRight: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}))
