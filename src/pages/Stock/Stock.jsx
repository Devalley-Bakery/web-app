import { Fragment, useEffect, useMemo, useState } from "react";
import {
  Container,
  Typography,
  Grid2,
  Divider,
  Snackbar,
  Button,
  Alert,
} from "@mui/material";
import ProductList from "./ProductList";
import { classe } from "./styles";
import EditProductDialog from "./EditProductDialog";
import api from "../../api";

const CATEGORIES = ["food", "dessert", "drink"];

export default function Stock() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("food");
  const [items, setItems] = useState([]);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setItems(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const filteredItems = useMemo(
    () => items.filter((i) => i.type === selectedCategory),
    [items, selectedCategory]
  );

  const handleOpenEditDialog = (item) => {
    setSelectedItem(item);
  };

  const handleSnackClose = () => {
    setSnackOpen(false);
  };

  const handleSaveChanges = async (updatedItem) => {
    await updateProduct(updatedItem);
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );

    setSelectedItem(null);
    setSnackMessage("Produto atualizado com sucesso!");
    setSnackSeverity("success");
    setSnackOpen(true);
  };

  const updateProduct = async (updatedItem) => {
    try {
      const item = {
        stockQuantity: parseInt(updatedItem.stockQuantity),
        price: parseFloat(updatedItem.price),
      };
      await api.put(`/products/${updatedItem.id}`, item);
    } catch (error) {
      console.error("Erro ao salvar as alterações:", error);
      setSnackMessage("Erro ao atualizar o produto!");
      setSnackSeverity("error");
      setSnackOpen(true);
    }
  };

  return (
    <Container sx={classe.container}>
      <Typography component="div" sx={classe.title}>
        Gerenciamento de Estoque
      </Typography>

      <Grid2
        container
        spacing={1}
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2 sx={{ display: "flex", justifyContent: "center" }}>
          {CATEGORIES.map((category) => (
            <Fragment key={category}>
              <Button
                variant={selectedCategory === category ? "contained" : "text"}
                sx={{ borderRadius: "15px", color: "black", mx: 1 }}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "food"
                  ? "Salgados"
                  : category === "dessert"
                  ? "Doces"
                  : "Bebidas"}
              </Button>
              {category !== "drink" && <Divider />}
            </Fragment>
          ))}
        </Grid2>
      </Grid2>
      <Container sx={classe.itemListContainer}>
        <ProductList items={filteredItems} onItemClick={handleOpenEditDialog} />
      </Container>

      {selectedItem && (
        <EditProductDialog
          open={Boolean(selectedItem)}
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onSave={handleSaveChanges}
        />
      )}

      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        key={"bottom center"}
      >
        <Alert
          onClose={handleSnackClose}
          severity={snackSeverity}
          sx={{ width: "100%" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
