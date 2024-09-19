import { Container, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Stack spacing={2} direction="column" alignItems="center" sx={{ mt: 5 }}>
        <Typography variant="h4" component="div">
          Pedidos
        </Typography>
        <Typography variant="body1">
          Aqui você verá a lista de pedidos.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Voltar para Home
        </Button>
      </Stack>
    </Container>
  );
};

export default Orders;
