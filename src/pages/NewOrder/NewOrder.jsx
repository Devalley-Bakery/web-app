import { Fragment, useEffect, useMemo, useState } from "react";
import {
  Button,
  Container,
  Divider,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { classe } from "./styles";
import api from "../../api";
import ModalCart from "./ModalCart";
import DefaultModal from "../../components/DefaultModal";
import MessageModal from "../../components/MessageModal";
import ReviewOrderDialog from "./ReviewOrder";

export default function NewOrder() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("food");
  const [selectedItems, setSelectedItems] = useState([]);
  const [openModal, setOpenModal] = useState(null);
  const [status, setStatus] = useState({ message: "", open: false });
  const [errorMessages, setErrorMessages] = useState({});
  const isMobile = useMediaQuery("(max-width:600px)");

  const filteredItems = useMemo(
    () => products.filter((product) => product.type === selectedCategory),
    [products, selectedCategory]
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const savedItems = localStorage.getItem("selectedItems");
    if (savedItems) {
      setSelectedItems(JSON.parse(savedItems));
    }
  }, []);

  const handleAdd = (id) => {
    const product = products.find((item) => item.id === id);
    const selectedItem = selectedItems.find((item) => item.id === id);

    if (selectedItem && selectedItem.quantity >= product.stockQuantity) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [id]: "Quantidade máxima em estoque atingida!",
      }));
      return;
    }
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [id]: null,
    }));

    updateQuantity(id, 1);
  };

  const handleRemove = (id) => {
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [id]: null,
    }));
    updateQuantity(id, -1);
  };

  const updateQuantity = (id, delta) => {
    const updatedProducts = products.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    );
    setProducts(updatedProducts);

    const product = updatedProducts.find((item) => item.id === id);
    const itemExists = selectedItems.find((item) => item.id === id);

    if (itemExists) {
      const updatedItems = selectedItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0);
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
    const selectedProducts = selectedItems.map((i) => {
      return { productId: i.id, quantity: i.quantity };
    });
    const newOrder = {
      employeeId: 2,
      products: [...selectedProducts],
    };

    api
      .post("/orders", newOrder)
      .then((res) => {
        if (res.status === 201) {
          setOpenModal(null);
          setStatus({ message: "Pedido realizado!", open: true });
        }
      })
      .catch((err) => {
        setOpenModal(null);
        setStatus({ message: err, open: true });
      });
    localStorage.removeItem("selectedItems");
  };

  const handleConfirm = () => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    setOpenModal("receipt");
  };

  return (
    <Container sx={classe.container}>
      <Typography component="div" sx={classe.title}>
        Novo Pedido
      </Typography>

      <Grid2
        container
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexGrow: 1,
        }}
      >
        <Grid2 size={isMobile ? 12 : 2} sx={classe.buttonGrid}>
          {["food", "dessert", "drink"].map((category) => (
            <Fragment key={category}>
              <Button
                key={category}
                variant={selectedCategory === category ? "contained" : "text"}
                sx={{ borderRadius: "15px", color: "black" }}
                onClick={() => handleFilterChange(category)}
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

        <Grid2 size={isMobile ? 12 : 9} sx={classe.mainGrid}>
          <Container sx={classe.itemListContainer}>
            <ProductList
              items={filteredItems}
              selectedItems={selectedItems}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              errorMessages={errorMessages}
            />
          </Container>
          <Footer
            items={selectedItems}
            onOpenModal={handleOpenModal}
            onConfirm={handleConfirm}
          />
        </Grid2>
      </Grid2>
      <ModalCart
        title={"Carrinho"}
        open={openModal === "cart"}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirm}
        items={selectedItems}
      />

      <ReviewOrderDialog
        onClose={handleCloseModal}
        open={openModal === "receipt"}
        setConfirmDialog={setOpenModal}
      />

      <DefaultModal
        title={"Confirmar pedido?"}
        open={openModal === "confirm"}
        handleClose={handleCloseModal}
        handleConfirm={handleSubmit}
        description={
          "Confirme para enviar o pedido à produção. Após confirmar, não será possível alterar."
        }
      />
      <MessageModal description={status.message} open={status.open} />
    </Container>
  );
}
