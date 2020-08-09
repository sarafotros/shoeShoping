import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palette from './palette'

const theme = createMuiTheme({
  palette,
  spacing: 2,
  typography: {
    allVariants: {
      //   fontFamily: '"Fredericka the Great", cursive'
      fontFamily: '"Staatliches", cursive'
    },
    h1: {
      fontSize: 35,
      fontWeight: 'bold',
      fontWeight: 700
    },
    h2: {
      fontSize: 31,
      fontWeight: 'bold',
      fontWeight: 600
    },
    h3: {
      fontSize: 27,
      fontWeight: 500
    },
    h4: {
      fontSize: 23,
      fontWeight: 500
    },
    h5: {
      fontSize: 19,
      fontWeight: 'bold'
    },
    h6: {
      fontSize: 15,
      fontWeight: 'bold'
    },
    body1: {
      fontSize: 16,
      fontWeight: 300
    },
    body2: {
      fontSize: 14,
      fontWeight: 300
    },
    subtitle1: {
      fontSize: 22,
      fontWeight: 500
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 300
    },
    caption: {
      fontSize: 12,
      fontWeight: 200
    },
    button: {
      fontSize: 15
    },
    overline: {
      fontSize: 13,
      fontWeight: 500,
      textDecoration: 'line-through',
      color: 'red'
    }
  }
})
export default responsiveFontSizes(theme)