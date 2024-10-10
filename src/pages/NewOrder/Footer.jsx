/* eslint-disable react/prop-types */
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { classe } from './styles';

export default function Footer({ items, onOpenCart, onOpenConfirm}) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <Box sx={classe.footerBox}>
      <Button variant="text" sx={{ color: 'black' }} onClick={() => onOpenCart('cart')}>
        <ShoppingCartOutlinedIcon sx={{ mr: 1 }} />
        {`${isMobile ? '' : 'Ver carrinho'}`}
      </Button>
      <Typography variant={isMobile ? "h9" : "h6"}>
        Total: R$ {totalPrice}
      </Typography>

      <Button variant="contained" color= 'secondary' onClick={() => onOpenConfirm('confirm')} sx={{
        '&:hover': {
          backgroundColor: '#FFA1AF',
        },
        
      }} >
        {`${isMobile ? 'FINALIZAR' : 'REALIZAR PEDIDO'}`}
      </Button>
    </Box>
  );
}
