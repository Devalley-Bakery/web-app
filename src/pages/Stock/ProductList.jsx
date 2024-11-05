/* eslint-disable react/prop-types */
import { Avatar, Box, Divider, Grid2, Typography } from "@mui/material";
import { classe } from './styles';

export default function ProductList({ items, onItemClick }) {

  return (
    <Grid2 container  >
      {items.map((item) => {
        return(
        <Grid2 item xs={12} sm={6} md={4}  key={item.id} onClick={() => onItemClick(item)} >
          <Box sx={classe.listItem}>
          <Box sx={classe.itemInfo}>
              <Avatar variant="rounded" src={item.img} alt={item.name} sx={classe.avatar} />
              <Typography variant="body1" sx={{ my: '10px' }}>{item.name}</Typography>
              <Divider/>
              <Typography variant="body2" sx={{ marginTop: 1,fontSize: '12px', color: '#515151' }}>{`Preço: R$ ${item.price}`}</Typography>
              <Typography variant='body2' sx={{ fontSize: '12px', color: '#515151' }} >{`Quantidade: ${item.quantity}`}</Typography>
            </Box>
          </Box>
        </Grid2>
      )
      })}
    </Grid2>
  );
}
