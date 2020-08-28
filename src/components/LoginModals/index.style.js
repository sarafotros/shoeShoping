import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    width: 300,
    height: 'auto',
    backgroundColor: '#1a222a',
    margin: 'auto',
    marginTop: 80,
    padding: 20,
    outline: 'none',
    borderRadius: 4,
  },
  inputContainer: {
    backgroundColor: '#2a3a48',
    borderRadius: 5,
    border: '1px solid #203d75',
    outline: 'none',
  },
  button: {
    marginTop: 20,
  },
  buttonTwo: {
    marginTop: 10,
    fontSize: 12,
  },
  btnLabel: {
    justifyContent: 'left',
  },
}))
