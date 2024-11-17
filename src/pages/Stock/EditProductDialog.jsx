import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { classe } from "./styles";

export default function EditProductDialog({ open, item, onClose, onSave }) {
  const [price, setPrice] = useState(item?.price);
  const [quantity, setQuantity] = useState(item?.stockQuantity);

  useEffect(() => {
    if (item) {
      setPrice(item.price);
      setQuantity(item.stockQuantity);
    }
  }, [item]);

  const handleSave = () => {
    const updatedItem = {
      ...item,
      price: parseFloat(price),
      stockQuantity: parseInt(quantity),
    };
    onSave(updatedItem);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Editar Produto</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Produto"
          variant="outlined"
          margin="dense"
          color="black"
          sx={{ width: "50vh" }}
          disabled={true}
          value={item.name}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          label="Preço"
          type="number"
          sx={{ width: "50vh" }}
          variant="outlined"
          margin="dense"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          label="Quantidade"
          type="number"
          sx={{ width: "50vh" }}
          variant="outlined"
          margin="dense"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{ margin: "auto", mb: 1 }}>
        <Button
          onClick={onClose}
          sx={classe.button}
          variant="outlined"
          color="textfield"
        >
          Cancelar
        </Button>
        <Button
          onClick={handleSave}
          sx={classe.button}
          variant="contained"
          color="secondary"
        >
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

EditProductDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    img: PropTypes.string,
    stockQuantity: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
