import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const theme = createMuiTheme({
  root: {
  },
  palette: {
    primary: {
      main: '#EE2C33',
    },
    secondary: {
      main: '#300000',
    },
    error: {
      main: red.A400,
    },
    background: {
      main: '#fff',
      default: '#fff'
    },
  },
  typography: {
    h1: {
      fontFamily: "Playfair Display",
      fontSize: 48,
      lineHeight: "60px",
      marginBottom: 20,
      fontWeight: 900,
      
    },
    h2: {
      fontFamily: "Playfair Display",
      fontSize: 44,
      lineHeight: "52px",
      marginBottom: 20,
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Playfair Display",
      fontSize: 32,
      lineHeight: "40px",
      marginBottom: 20,
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Playfair Display",
      fontSize: 28,
      lineHeight: "36px",
      marginBottom: 20,
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Playfair Display",
      fontSize: 24,
      lineHeight: "32px",
      marginBottom: 20,
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Playfair Display",
      fontSize: 20,
      lineHeight: "24px",
      marginBottom: 20,
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: 20,
      lineHeight: "24px",
      marginBottom: 8,
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontSize: 18,
      lineHeight: "24px",
      marginBottom: 8,
      fontWeight: 700,
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: 16,
      lineHeight: "20px",
      marginBottom: 8,
    },
    body2: {
      fontFamily: "Poppins",
      fontSize: 14,
      lineHeight: "20px",
      marginBottom: 8,
    },
    button: {
      fontFamily: "Poppins",
      fontSize: 14,
      lineHeight: "20px",
    },
    caption: {
      fontFamily: "Poppins",
      fontSize: 12,
      lineHeight: "16px",
    },
    overline: {
      fontFamily: "Playfair Display",
      fontSize: 18,
      lineHeight: "24px",
    },
  },
});