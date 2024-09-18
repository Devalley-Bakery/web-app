import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/background.png'
import { classes } from "./styles";
import { useTheme } from "@emotion/react";

const Homepage = () => {
  const navigate = useNavigate();
  const theme = useTheme()

  return (
    <>
      <Container
        sx={{
          ...classes.container,
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: theme.palette.primary.main
        }}
      >
        <Stack spacing={2} direction="column" alignItems="center" sx={{ mt: 5 }}>
          <Typography variant="h6" component="div" sx={{ pl: 0, fontSize: '35px', fontFamily: 'Henny Penny' }}>
            Bakery
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontSize: '35px', fontFamily: 'Henny Penny' }}>
            in Clouds
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={classes.button}
            size="large"
            onClick={() => navigate("/estoque")}
          >
            Estoque
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={classes.button}
            size="large"
            onClick={() => navigate("/pedidos")}
          >
            Pedidos
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={classes.button}
            size="large"
            onClick={() => navigate("/novo-pedido")}
          >
            Novo Pedido
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Homepage;
