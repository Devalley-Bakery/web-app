import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      background: {
        default: '#ccc7f1', 
        paper: '#ffffff', 
      },
      primary: {
        main: '#E2A5AA',
      },
      secondary: {
        main: '#D4BBC8',
      },
      text: {
        primary: '#4D2B7F',
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h1: {
        fontFamily: "'Caveat', cursive",
        fontSize: '3rem',
      },
      button: {
        fontSize: '1.2rem',
      },
    },
  });

export default theme;
