import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: 300,
    height: 'auto',
    backgroundColor: '#1a222a',
    margin: 'auto',
    marginTop: 80,
    padding: 20,
    outline: 'none',
    borderRadius: 4,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  rootSignUp: {
    width: 600,
    height: 'auto',
    backgroundColor: '#1a222a',
    margin: 'auto',
    marginTop: 80,
    padding: 25,
    outline: 'none',
    '&:focus': {
      outline: 'none',
    },
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  inputContainer: {
    backgroundColor: '#2a3a48',
    borderRadius: 5,
    border: '1px solid #203d75',
    outline: 'none',
    marginTop: 10,
    marginBottom: 10,
  },
  formGrid: {
    paddingRight: 7,
    paddingLeft: 7,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
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
  codeDiv: {
    display: 'flex',
    msFlexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  counterText: {
    textAlign: 'center',
    width: '100%',
    marginTop: 15,
    fontSize: 12,
    color: '#b3aeae',
  },
  textType: {
    textAlign: 'center',
    width: '100%',
    marginTop: 15,
    color: '#b3aeae',
  },
  buttonText: {
    fontSize: 12,
  },
  sendCodeButton: {
    marginTop: 15,
  },
}))
