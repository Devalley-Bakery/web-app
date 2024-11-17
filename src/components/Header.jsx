import { Link, useLocation } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const location = useLocation();
  const theme = useTheme()

  const headerStyle = {
    backgroundColor: location.pathname === '/' ?theme.palette.background : theme.palette.common.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  };

  return (
    <Box sx={headerStyle}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        { location.pathname === '/'  ? <MenuIcon /> : <HomeIcon/> }
        <Button component={Link} to="/" sx={{ fontFamily:'Ruluko', fontSize:'25px',marginLeft: 1, color: 'black', textTransform: 'none' }}>
        { location.pathname === '/'  ? 'MENU' : 'HOME'}
        </Button>
      <Button variant={location.pathname === '/estoque' ? "contained" : "text"} component={Link} to="/estoque" sx={{color: 'black', m:1}}>Estoque</Button>
      <Button variant={location.pathname === '/pedidos' ? "contained" : "text"} component={Link} to="/pedidos" sx={{color: 'black', m:1}}>Pedidos</Button>
      </Box>
      <Button component={Link} to="/novo-pedido" disabled={location.pathname === '/novo-pedido'} sx={{ color: 'black', textTransform: 'none', fontSize:'18px', }}>
        <AddCircleOutlineIcon sx={{ marginRight: 1 }} /> Novo Pedido
      </Button>
    </Box>
  );
};

export default Header;
