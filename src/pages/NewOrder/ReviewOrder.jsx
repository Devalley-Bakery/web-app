import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  Grid2,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { classe } from "./styles";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    align: "center",
    headerAlign: "center",
    headerClassName: "header-cell",
  },
  {
    field: "name",
    headerName: "Item",
    width: 200,
    editable: false,
    headerClassName: "header-cell",
  },
  {
    field: "price",
    headerName: "Preço (R$)",
    width: 105,
    flex: 1,
    align: "center",
    editable: false,
    headerClassName: "header-cell",
    type: "number",
    headerAlign: "center",
  },
  {
    field: "quantity",
    flex: 1,
    align: "center",
    headerName: "Quantidade",
    width: 120,
    editable: false,
    headerClassName: "header-cell",
    headerAlign: "center",
  },
  {
    field: "total",
    align: "center",
    headerName: "Total (R$)",
    flex: 1,
    width: 130,
    headerClassName: "header-cell",
    headerAlign: "center",
    valueGetter: (value, row) => {
      return (row.quantity * row.price).toFixed(2);
    },
  },
];

export function CustomFooter({ totalQuantity }) {
  return (
    <Box sx={classe.dialogFooter}>
      <Typography variant="body1">
        <strong>{totalQuantity}</strong> {totalQuantity > 1 ? "items" : "item"}
      </Typography>
    </Box>
  );
}

CustomFooter.propTypes = {
  totalQuantity: PropTypes.number.isRequired,
};

export default function ReviewOrderDialog({ onClose, open, setConfirmDialog }) {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    if (open) {
      const savedItems = JSON.parse(localStorage.getItem("selectedItems") || "[]");
      setProducts(savedItems);

      const totalPriceCalc = savedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const totalQuantityCalc = savedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      setTotalPrice(totalPriceCalc);
      setTotalQuantity(totalQuantityCalc);
    }
  }, [open]); 

  return (
    <Dialog open={open} sx={classe.receipt}>
      <DialogTitle sx={{ margin: "auto" }}> Revisão do Pedido</DialogTitle>
      <Grid2
        container
        spacing={1}
        sx={{ m: 2, display: "flex", justifyContent: "center" }}
      >
        <DataGrid
          sx={{ ...classe.dataGrid }}
          rows={products}
          columns={columns}
          pageSize={products.length}
          rowsPerPageOptions={[]}
          disableSelectionOnClick
          disableColumnResize
          disableColumnSorting
          slots={{
            footer: () => (
              <CustomFooter
                totalPrice={totalPrice}
                totalQuantity={totalQuantity}
              />
            ),
          }}
        />

        <Container sx={classe.actions}>
          <Button variant="outlined" sx={classe.cancelButton} onClick={onClose}>
            CANCELAR
          </Button>
          <Typography sx={classe.totalPrice}>
            Total: R$ {totalPrice.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setConfirmDialog('confirm')}
            sx={{
              width: "25vw",
              "&:hover": {
                backgroundColor: "#FFA1AF",
              },
            }}
          >
            PROSSEGUIR
          </Button>
        </Container>
      </Grid2>
    </Dialog>
  );
}

ReviewOrderDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  setConfirmDialog: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
