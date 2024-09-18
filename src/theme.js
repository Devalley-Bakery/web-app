import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#ECDDFF",
      paper: "#ffffff",
    },
    primary: {
      main: "#CCACFF59",
    },
    secondary: {
      main: "#FFD8E4",
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
