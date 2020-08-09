import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    padding: 10,
    borderBottomColor: theme.palette.border.cartItemBorder,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deleteIcon: {
    width: 30,
    marginBottom: 8,
  },
  shoesImg: {
    width: 60,
    // backgroundColor: '#90caf9',
    borderRadius: 10,
    padding: 5,
    height: 60,
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  descDiv: {
    marginLeft: 20,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  DeleteDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingBottom: 10,
  },
}))
