import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { Box, useTheme } from '@mui/material';

const Layout = () => {
  const location = useLocation();
  const theme = useTheme();
  const setBackground = (location.pathname === '/' || location.pathname === '/novo-pedido/confirmar') ?theme.palette.background : theme.palette.common.white

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: setBackground }}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
