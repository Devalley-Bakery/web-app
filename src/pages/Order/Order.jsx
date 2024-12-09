import { classe } from "./style";
import { Container, Divider, Box, CircularProgress } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import api from "../../api";
import OrderItem from "./OrderItem";
import OrderModal from "./OrderModal";
import StatusToggle from "./StatusToggle";
import OrderCart from "./OrderCart";
import { Snackbar, Alert } from "@mui/material";

const STATUS = {
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELED: "canceled",
};

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(STATUS.IN_PROGRESS);
  const [openModal, setOpenModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState();

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get(`/orders`);
      setOrders(response.data.data);
    } catch (err) {
      console.log(err);
      setError("Erro ao carregar os pedidos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const order = orders.find((o) => o.id === selectedOrderId);
    setSelectedOrder(order);
  }, [orders, selectedOrderId]);

  useEffect(() => {
    fetchOrders(filter);
  }, [filter]);

  const filteredOrders = orders ? orders
    .filter((order) => order.status === filter)
    .sort((a, b) => (filter === STATUS.COMPLETED ? b.id - a.id : a.id - b.id)): []

  const highlightedOrder =
    filter === STATUS.IN_PROGRESS
      ? filteredOrders.find((order) => order.status === STATUS.IN_PROGRESS)
      : null;

  const remainingOrders = highlightedOrder
    ? filteredOrders.filter((order) => order.id !== highlightedOrder.id)
    : filteredOrders;

  const updateOrderStatus = async (id, status, updateStateCallback) => {
    try {
      await api.put(`/orders/${id}`, { status });
      setOrders((prevOrders) => updateStateCallback(prevOrders, id));
    } catch (err) {
      console.error(err);
      setError(
        status === STATUS.COMPLETED
          ? "Erro ao finalizar o pedido."
          : "Erro ao cancelar o pedido."
      );
    } finally {
      handleCloseModal();
    }
  };

  const finalizeOrder = (id) =>
    updateOrderStatus(id, STATUS.COMPLETED, (orders, id) =>
      orders.map((order) =>
        order.id === id ? { ...order, status: STATUS.COMPLETED } : order
      )
    );

  const cancelOrder = (id) =>
    updateOrderStatus(id, STATUS.CANCELED, (orders, id) =>
      orders.filter((order) => order.id !== id)
    );

  const handleOpenModal = (modalName, orderId) => {
    setOpenModal(modalName);
    setSelectedOrderId(orderId);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedOrderId(null);
  };

  const handleSnackbarClose = () => {
    setError(null); 
  };

  return (
    <Container sx={classe.itemListContainer}>
      <StatusToggle filter={filter} setFilter={setFilter} />

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress />
        </Box>
      )}

      {!loading && filteredOrders.length === 0 && (
        <Box sx={{ mt: 2, textAlign: "center" }}>Nenhum pedido encontrado.</Box>
      )}

      {!loading && highlightedOrder && (
        <Box sx={{ ...classe.highlightOrder }}>
          <OrderItem
            order={highlightedOrder}
            onOpen={handleOpenModal}
            isInProgress={filter === STATUS.IN_PROGRESS}
            isHighlighted={true}
          />
        </Box>
      )}

      {!loading &&
        remainingOrders.map((order, index, array) => (
          <Fragment key={order.id}>
            <OrderItem
              order={order}
              onOpen={handleOpenModal}
              isInProgress={filter === STATUS.IN_PROGRESS}
            />
            {index < array.length - 1 && <Divider sx={{ my: 2 }} />}
          </Fragment>
        ))}

      <OrderModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        handleConfirm={openModal === "confirm" ? finalizeOrder : cancelOrder}
        selectedOrderId={selectedOrderId}
      />
      <OrderCart
        title={"Pedido"}
        open={openModal === "order"}
        handleClose={handleCloseModal}
        items={selectedOrder}
      />

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: "100%",  backgroundColor: "#FECDCD",   // Cor de fundo vermelha
      color: "black",    }}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}
