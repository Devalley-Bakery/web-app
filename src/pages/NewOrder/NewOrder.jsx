import { useEffect, useState } from "react";
import { Box, Button, Container, Divider, Grid2, Typography } from "@mui/material";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { classe } from './styles';
import api from "../../api";

export default function NewOrder() {
  const [selectedCategory, setSelectedCategory] = useState('food');
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    api.get("/products")
      .then((res) => {
        setProducts(res.data)
        console.log("Res Data: ", res.data)
        
        const initialFilter = res.data.filter(item => item.type === selectedCategory);
        setFilteredItems(initialFilter)
      })
      .catch((err) => {
        console.log("erro: ", err)
      })
  }, [])

  const handleAdd = (id) => {
    setProducts(products.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleRemove = (id) => {
    setProducts(products.map(item => item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const handleFilterChange = (filter) => {
    const newFilteredProducts = products.filter(p => {return p.type === filter})
    setSelectedCategory(filter)
    setFilteredItems(newFilteredProducts)
  }

  return (
    <Container sx={classe.container}>
      <Typography component="div" sx={classe.title}>
        Novo Pedido
      </Typography>
      <Box sx={classe.inputBox}>
        <input placeholder="Procurar..." style={{ padding: '5px', borderRadius: '5px' }} />
      </Box>

      <Grid2 container spacing={1} sx={{ display: 'flex', flexGrow: 1 }}>
        <Grid2 size={2} sx={classe.buttonGrid}>
          <Button
            variant={selectedCategory === 'food' ? 'contained' : 'text'}
            sx={{
              borderRadius: '15px',
              color: 'black',
            }}
            onClick={() => handleFilterChange('food')}
          >
            Salgados
          </Button>
          <Divider />
          <Button
            variant={selectedCategory === 'dessert' ? 'contained' : 'text'}
            sx={{
              borderRadius: '15px',
              color: 'black',
            }}
            onClick={() => handleFilterChange('dessert')}
          >
            Doces
          </Button>
          <Divider />
          <Button
            variant={selectedCategory === 'drink' ? 'contained' : 'text'}
            sx={{
              borderRadius: '15px',
              color: 'black',
            }}
            onClick={() => handleFilterChange('drink')}
          >
            Bebidas
          </Button>
        </Grid2>

        <Grid2 size={9} sx={classe.mainGrid}>

          <Container sx={classe.itemListContainer}>
            <ProductList items={filteredItems} handleAdd={handleAdd} handleRemove={handleRemove} />
          </Container>

          <Footer items={products} />
        </Grid2>
      </Grid2>
    </Container>
  );
}
