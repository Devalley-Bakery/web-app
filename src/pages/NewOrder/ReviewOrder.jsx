/* eslint-disable react/prop-types */
import { Box, Container, Grid2, Typography } from "@mui/material";
import { classe } from "./styles";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    align: "center",
    headerAlign: "center",
    headerClassName: "header-cell",
  },
  {
    field: "name",
    headerName: "Item",
    width: 290,

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
     
     return  (row.quantity * row.price).toFixed(2);
    },
  },
];

export function CustomFooter({ totalPrice, totalQuantity }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        px:" 20px",
        backgroundColor: "#CDB8E9", // Fundo suave
                // Bordas arredondadas
        marginTop: "20px",          // Espaço extra abaixo do DataGrid
      }}
    >
      <Typography variant="body1">Total de Itens: <strong>{totalQuantity}</strong></Typography>
      <Typography  sx={{ color: "#333", fontWeight: "bold" }}>
        Valor Total: R$ {totalPrice.toFixed(2)}
      </Typography>
    </Box>
  );
}


export default function ReviewOrder() {
  //const isMobile = useMediaQuery("(max-width:600px)");
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);


  useEffect(() => {
    const savedItems = localStorage.getItem("selectedItems");
    if (savedItems) {
      const parsedItems = JSON.parse(savedItems);
      setProducts(parsedItems);

      const totalPriceCalc = parsedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const totalQuantityCalc = parsedItems.reduce((sum, item) => sum + item.quantity, 0);

      setTotalPrice(totalPriceCalc);
      setTotalQuantity(totalQuantityCalc);
    }
  }, []);

  return (
    <Container>
      <Typography component="div" sx={{ ...classe.title, pt: 2 }}>
        Revisão do Pedido
      </Typography>

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
              footer: () => <CustomFooter totalPrice={totalPrice} totalQuantity={totalQuantity} />,
            }}
          />
        
      </Grid2>
      {/* <DefaultModal title={"Confirmar pedido?"} open={openModal === 'confirm'} handleClose={handleCloseModal} handleConfirm={handleSubmit} description={description} /> */}
      {/* <MessageModal description={status.message} open={status.open} /> */}
    </Container>
  );
}
