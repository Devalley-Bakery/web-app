import { Container, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Stock = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Stack spacing={2} direction="column" alignItems="center" sx={{ mt: 5 }}>
        <Typography variant="h4" component="div">
          Estoque
        </Typography>
        <Typography variant="body1">
          Aqui você verá o estoque da padaria.
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

export default Stock;
