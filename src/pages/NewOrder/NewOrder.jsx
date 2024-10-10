import { useEffect, useState } from "react";
import { Box, Button, Container, Divider, Grid2, Typography } from "@mui/material";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { classe } from './styles';
import api from "../../api";
import ModalCart from "./ModalCart";

export default function NewOrder() {
  const [selectedCategory, setSelectedCategory] = useState('food');
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);


  useEffect(() => {
    api.get("/products")
      .then((res) => {
        setProducts(res.data);
        filterProducts(res.data, selectedCategory);
      })
      .catch((err) => {
        console.log("erro: ", err);
      });
  }, [selectedCategory]);

  const filterProducts = (products, category) => {
    const newFilteredProducts = products.filter(item => item.type === category);
    setFilteredItems(newFilteredProducts);
  };

  const handleAdd = (id) => {
    updateQuantity(id, 1);
  };

  const handleRemove = (id) => {
    updateQuantity(id, -1);
  };

  const updateQuantity = (id, delta) => {
    const updatedProducts = products.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    );
    setProducts(updatedProducts);

    const product = updatedProducts.find(item => item.id === id);
    const itemExists = selectedItems.find(item => item.id === id);

    if (itemExists) {
      const updatedItems = selectedItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      ).filter(item => item.quantity > 0);
      setSelectedItems(updatedItems);
    } else if (delta > 0) {
      setSelectedItems([...selectedItems, { ...product, quantity: 1 }]);
    }
  };

  const handleFilterChange = (filter) => {
    setSelectedCategory(filter);
  };

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <Container sx={classe.container}>
      <Typography component="div" sx={classe.title}>Novo Pedido</Typography>
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
            <ProductList items={filteredItems} selectedItems={selectedItems} handleAdd={handleAdd} handleRemove={handleRemove} />
          </Container>
          <Footer items={selectedItems} onOpenCart={handleOpenCart} />
        </Grid2>
      </Grid2>
      <ModalCart title={'Carrinho'} open={isCartOpen} handleClose={handleCloseCart} items={selectedItems} />

    </Container>
  );
}
