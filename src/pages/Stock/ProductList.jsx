/* eslint-disable react/prop-types */
import { Avatar, Box, Grid2, Typography } from "@mui/material";
import { classe } from './styles';
import { useEffect } from "react";

export default function ProductList({ items }) {

  const handleClick = (object) => {
    console.log(`Item ID: ${object}`);
  };

  useEffect(() => {console.log(items)}, [items])

  return (
    <Grid2 container  >
      {items.map((item) => {
        return(
        <Grid2 item xs={12} sm={6} md={4}  key={item.id} onClick={() => handleClick(item)} >
          <Box sx={classe.listItem}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '150px', mx: 'auto' }}>
              <Avatar variant="rounded" src={item.img} alt={item.name} sx={classe.avatar} />
              <Typography variant="body1" sx={{ marginTop: '10px' }}>{item.name}</Typography>
              <Typography variant="body2" sx={{ fontSize: '10px', color: '#515151' }}>{`Preço: R$ ${item.price}`}</Typography>
              <Typography variant='body2' sx={{ fontSize: '10px', color: '#515151' }} >{`Quantidade: ${item.quantity}`}</Typography>
            </Box>
          </Box>
        </Grid2>
      )
      })}
    </Grid2>
  );
}
