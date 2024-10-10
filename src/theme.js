import { createTheme, darken } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#ECDDFF", //lilás
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

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          /* Estilização global da scroll bar */
          '&::-webkit-scrollbar': {
            width: '12px',
            backgroundColor: darken("#ECDDFF", 0.3), // Cor de fundo da área de rolagem
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888', // Cor do "dedo" da barra de rolagem
            borderRadius: '6px', // Arredondamento
            border: '2px solid #f5f5f5', // Espaçamento interno
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#666', // Cor ao passar o mouse
          },
          '&::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#555', // Cor ao clicar
          },
          /* Personalização para Firefox */
          scrollbarWidth: 'thin',
          scrollbarColor: '#888 #f5f5f5',
        },
      },
    },
  },
});

export default theme;
