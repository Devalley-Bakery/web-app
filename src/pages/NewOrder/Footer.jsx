/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { classe } from './styles';

export default function Footer({ items, onOpenCart }) {
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <Box sx={classe.footerBox}>
      <Button variant="text" sx={{ color: 'black' }} onClick={onOpenCart}>
        <ShoppingCartOutlinedIcon />
        Ver carrinho
      </Button>
      <Typography variant="h6">
        Total: R$ {totalPrice}
      </Typography>
      <Button variant="contained" color="secondary" >
        REGISTRAR PEDIDO
      </Button>
    </Box>
  );
}
