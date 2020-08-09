import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 60,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#131a21',
    boxShadow: '1px 0px 3px 0px #3b3939',
  },
  brandDiv: {
    width: 120,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandImg: {
    width: '80%',
    marginTop: 20,
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
    paddingRight: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}))
