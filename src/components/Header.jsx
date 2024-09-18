import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#d7c5ed' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Bakery in Clouds
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/estoque">Estoque</Button>
          <Button color="inherit" component={Link} to="/pedidos">Pedidos</Button>
          <Button color="inherit" component={Link} to="/novo-pedido">Novo Pedido</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
