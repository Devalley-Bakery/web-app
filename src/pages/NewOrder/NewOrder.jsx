import { useState } from "react";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { classe } from './styles';

export default function NewOrder() {
  const [selectedCategory, setSelectedCategory] = useState('Salgados');
  const [items, setItems] = useState([
    { id: 1, name: 'Calzone de Calabresa', price: 17.0, img: 'https://th.bing.com/th/id/OIP.FJ-NQ4yUxTBYRLe5Gg3aZAHaE8?rs=1&pid=ImgDetMain', quantity: 0, category: 'Salgados' },
    { id: 2, name: 'Calzone de Frango', price: 17.0, img: 'https://th.bing.com/th/id/R.3b12eb7a9223fae99096dda9f8afa0a6?rik=IjSyclQs4PPF5A&pid=ImgRaw&r=0', quantity: 0, category: 'Salgados' },
    { id: 3, name: 'Coxinha', price: 5.0, img: 'https://th.bing.com/th/id/R.cfcb5ea0795015c875429cdded3550fa?rik=jvR%2b9PjPKQFk8A&pid=ImgRaw&r=0', quantity: 0, category: 'Salgados' },
    { id: 4, name: 'Empada de Frango', price: 8.0, img: 'https://th.bing.com/th/id/OIP.vY0QQZBCt_UtiEevZ52QgwHaFJ?rs=1&pid=ImgDetMain', quantity: 0, category: 'Salgados' },
    { id: 5, name: 'Brigadeiro', price: 6.0, img: 'https://www.guiadasemana.com.br/contentFiles/system/pictures/2015/7/139076/original/fotolia-51257019-subscription-monthly-m.jpg', quantity: 0, category: 'Doces' },
    { id: 6, name: 'Bolo de cenoura', price: 17.0, img: 'https://th.bing.com/th/id/R.ca4bc05a670700acf7cada85ce20e7fa?rik=E%2bqZK7EEn3vs6A&riu=http%3a%2f%2fwww.aminhafestinha.com%2fwp-content%2fuploads%2f2019%2f03%2fbolo-de-cenoura.jpg&ehk=viKJBzN82vIWh6gdpZJRyY3LSBkMMa3Sz7ObULYkb5c%3d&risl=&pid=ImgRaw&r=0', quantity: 0, category: 'Doces' },
    { id: 7, name: 'Croassaint de chocolate', price: 5.0, img: 'https://i.pinimg.com/originals/1d/89/9f/1d899f3c2c688f3d1e2c6c7f2a4e2df5.jpg', quantity: 0, category: 'Doces' },
    { id: 8, name: 'Suco de laranja', price: 8.0, img: 'https://th.bing.com/th/id/OIP.NWaBAFc0YFkJJoE9lbW62wAAAA?rs=1&pid=ImgDetMain', quantity: 0, category: 'Bebidas' },
  ]);

  const handleAdd = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleRemove = (id) => {
    setItems(items.map(item => item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const filteredItems = items.filter(item => item.category === selectedCategory);


  return (
    <Container sx={classe.container}>
      <Typography component="div" sx={classe.title}>
        Novo Pedido
      </Typography>

      <Grid2 container spacing={1} sx={{ display: 'flex', flexGrow: 1 }}>
        <Grid2 size={2} sx={classe.buttonGrid}>
          <Button variant="contained" sx={{ borderRadius: '15px' }} onClick={() => setSelectedCategory('Salgados')}>
            Salgados
          </Button>
          <Button variant="contained" sx={{ borderRadius: '15px' }} onClick={() => setSelectedCategory('Doces')}>
            Doces
          </Button>
          <Button variant="contained" sx={{ borderRadius: '15px' }} onClick={() => setSelectedCategory('Bebidas')}>
            Bebidas
          </Button>
        </Grid2>

        <Grid2 size={9} sx={classe.mainGrid}>
          <Box sx={classe.inputBox}>
            <input placeholder="Procurar..." style={{ padding: '5px', borderRadius: '5px' }} />
          </Box>
          <Container sx={classe.itemListContainer}>
            <ProductList items={filteredItems} handleAdd={handleAdd} handleRemove={handleRemove} />
          </Container>

          <Footer items={items} />
        </Grid2>
      </Grid2>
    </Container>
  );
}
