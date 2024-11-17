import { classe } from "./style";
import { Container, ToggleButton, ToggleButtonGroup, Box, Typography, Button, Divider } from "@mui/material";
import { useState } from "react";

const pedidos = [
  { id: 4, imagem: "/path/to/image1.jpg", status: "a preparar" },
  { id: 5, imagem: "/path/to/image2.jpg", status: "a preparar" },
  { id: 6, imagem: "/path/to/image3.jpg", status: "a preparar" },
  { id: 7, imagem: "/path/to/image4.jpg", status: "a preparar" },
];

export default function Order() {
  const [pedidoList, setPedidoList] = useState(pedidos);
  const [statusFiltro, setStatusFiltro] = useState("a preparar");

  const handleFiltroChange = (event, novoStatus) => {
    if (novoStatus !== null) {
      setStatusFiltro(novoStatus);
    }
  };

  const finalizarPedido = (id) => {
    setPedidoList((prevPedidos) =>
      prevPedidos.map((pedido) =>
        pedido.id === id ? { ...pedido, status: "finalizado" } : pedido
      )
    );
  };

  const cancelarPedido = (id) => {
    setPedidoList((prevPedidos) => prevPedidos.filter((pedido) => pedido.id !== id));
  };

  return (
    <Container sx={classe.itemListContainer}>
      {/* Toggle Button Group */}
      <ToggleButtonGroup
        value={statusFiltro}
        exclusive
        onChange={handleFiltroChange}
        sx={classe.toggleButtonGroup}
      >
        <ToggleButton value="a preparar" sx={classe.toggleButton}>
          A preparar
        </ToggleButton>
        <ToggleButton value="finalizado" sx={classe.toggleButton}>
          Finalizados
        </ToggleButton>
      </ToggleButtonGroup>

      {/* List of Orders */}
      {pedidoList
        .filter((pedido) => pedido.status === statusFiltro)
        .map((pedido, index, array) => (
          <Box key={pedido.id}>
            <Box sx={classe.orderItem}>
              {/* Order Details Section */}
              <Box sx={classe.orderDetails}>
                <img
                  src={pedido.imagem}
                  alt={`Pedido ${pedido.id}`}
                  style={classe.orderImage}
                />
                <Typography sx={classe.orderId}>ID {pedido.id}</Typography>
              </Box>

              {/* Action Buttons */}
              <Box sx={classe.actionButtons}>
                <Button variant="contained" color="secondary" sx={classe.actionButton}>
                  Ver Pedido
                </Button>
                {statusFiltro === "a preparar" && (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => finalizarPedido(pedido.id)}
                      sx={classe.actionButton}
                    >
                      Finalizar
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => cancelarPedido(pedido.id)}
                      sx={classe.actionButton}
                    >
                      Cancelar
                    </Button>
                  </>
                )}
              </Box>
            </Box>

            {index < array.length - 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))}
    </Container>
  );
}
