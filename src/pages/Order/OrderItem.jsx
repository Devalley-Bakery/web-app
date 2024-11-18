import { Box, Button, Container, Tooltip, Typography } from "@mui/material";
import { classe } from "./style";
import PropTypes from "prop-types";

export default function OrderItem({
  order,
  onOpen,
  isInProgress = false,
  isHighlighted = false,
}) {
  return (
    <Box>
      <Box sx={classe.orderItem}>
        {isHighlighted ? (
          <Box sx={{ position: "relative", width: "100%" }}>
            <Box sx={classe.imageButton}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onOpen("confirm", order.id)}
                sx={{
                  ...classe.actionButton,
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#ffffff",
                }}
              >
                Finalizar
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => onOpen("cancel", order.id)}
                sx={{
                  ...classe.actionButton,
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#ffffff",
                }}
              >
                Cancelar
              </Button>
            </Box>
            <Tooltip title="Visualizar pedido" disableFocusListener placement="bottom" arrow>
              <img
                src={order?.products[0]?.imagePath}
                alt={`Pedido ${order.id}`}
                onClick={() => onOpen("order", order.id)}
                style={classe.hightlightImage}
              />
            </Tooltip>
          </Box>
        ) : (
          <>
            <Container sx={classe.orderDetails}>
              <img
                src={order?.products[0]?.imagePath || "https:"}
                alt={`Pedido ${order.id}`}
                style={classe.orderImage}
              />
              <Box sx={classe.orderInfo}>
                <Typography sx={classe.orderId}>ID {order.id}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onOpen("order", order.id)}
                  sx={classe.viewOrderButton}
                >
                  Ver Pedido
                </Button>
              </Box>
            </Container>
            <Box sx={classe.actionButtons}>
              {isInProgress && (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onOpen("confirm", order.id)}
                    sx={{ ...classe.actionButton, backgroundColor: "#FFD8E4" }}
                  >
                    Finalizar
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => onOpen("cancel", order.id)}
                    sx={{ ...classe.actionButton, backgroundColor: "#ffffff" }}
                  >
                    Cancelar
                  </Button>
                </>
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

OrderItem.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        productName: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
  isInProgress: PropTypes.bool.isRequired,
  isHighlighted: PropTypes.bool,
};
