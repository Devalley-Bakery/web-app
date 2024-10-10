import { useEffect, useState } from "react";
import { Box, Button, Container, Divider, Grid2, Typography, useMediaQuery } from "@mui/material";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { classe } from './styles';
import api from "../../api";
import ModalCart from "./ModalCart";
import DefaultModal from "../../components/DefaultModal";
import MessageModal from "../../components/MessageModal";

export default function NewOrder() {
  const [selectedCategory, setSelectedCategory] = useState('food');
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [openModal, setOpenModal] = useState(null);
  const [status, setStatus] = useState({message: '', open: false})
  const isMobile = useMediaQuery('(max-width:600px)');
  const description = 'Confirme para enviar o pedido à produção. Verifique os itens, pois após confirmar, não será possível alterar.'

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

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const handleSubmit = () => {
    const selectedProducts = selectedItems.map((i) => { return { productId: i.id, quantity: i.quantity } })
    const newOrder = {
      employeeId: 2,
      products: [
        ...selectedProducts
      ]
    }
    
    api.post("/orders", newOrder)
      .then((res) => {
        if(res.status === 201){
          setOpenModal(null)
          setStatus({message: 'Pedido realizado!', open: true})
        }
        
      })
      .catch((err) => {
        console.log("erro: ", err);
      });
  }

  return (
    <Container sx={classe.container}>
      <Typography component="div" sx={classe.title}>Novo Pedido</Typography>
      {!isMobile && <Box sx={classe.inputBox}>
        <input placeholder="Procurar..." style={{ padding: '5px', borderRadius: '5px' }} />
      </Box>}

      <Grid2 container spacing={1} sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flexGrow: 1 }}>
        <Grid2 size={isMobile ? 12 : 2} sx={classe.buttonGrid}>
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

        <Grid2 size={isMobile ? 12 : 9} sx={classe.mainGrid}>
          <Container sx={classe.itemListContainer}>
            <ProductList items={filteredItems} selectedItems={selectedItems} handleAdd={handleAdd} handleRemove={handleRemove} />
          </Container>
          <Footer items={selectedItems} onOpenCart={handleOpenModal} onOpenConfirm={handleOpenModal} />
        </Grid2>
      </Grid2>
      <ModalCart title={'Carrinho'} open={openModal === 'cart'} handleClose={handleCloseModal} items={selectedItems} />
      <DefaultModal title={"Confirmar pedido?"} open={openModal === 'confirm'} handleClose={handleCloseModal} handleConfirm={handleSubmit} description={description} />
      <MessageModal description={status.message} open={status.open} />
    </Container>
  );
}
