import { createTheme, darken } from "@mui/material/styles";

const primaryMain = '#CCACFF59';
const secondaryMain = '#FFD8E4';
const commonWhite = '#FFFFFF';
const commonBlack = '#000000';

const theme = createTheme({
  palette: {
    background: {
      default: "#ECDDFF", //lilás
      paper: commonWhite,
    },
    primary: {
      main: primaryMain
    },
    secondary: {
      main: secondaryMain,
    },
    text: {
      primary: commonBlack
      
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    button: {
      textTransform: "none",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::-webkit-scrollbar": {
          width: "12px", 
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(255, 255, 255, 1)", 
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.9)", 
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "rgba(128, 128, 128, 0.2)", 
          borderRadius: "10px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: 'black', // Cor do label ao focar
          },
        },
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      contained: {
        backgroundColor: primaryMain,
        color: "#fff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        "&:hover": {
          backgroundColor: darken(primaryMain, 0.2),
        },
      },
      outlined: {
        "&:hover": {
          backgroundColor: "rgba(204, 172, 255, 0.2)", // Light purple background on hover
          borderColor: darken(primaryMain, 0.2),
        },
      },
    },
  },



});
export default theme;
