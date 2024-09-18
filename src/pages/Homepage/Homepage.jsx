import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../../../public/bakery_in_clouds_background.png'
const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
     <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
            textAlign: 'center',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',    
            backgroundPosition: 'center', 
            backgroundColor: '#ccc7f1'
          }}
        >
      <Stack spacing={2} direction="column" alignItems="center" sx={{ mt: 5 }}>
      <Typography variant="h6" component="div">
              Bakery in Clouds
            </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/estoque")}
        >
          Estoque
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/pedidos")}
        >
          Pedidos
        </Button>
        <Button
          variant="contained"
          color="primary"
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
