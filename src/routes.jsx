import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { NewOrder, Homepage, Stock, Order } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="estoque" element={<Stock />} />
      <Route path="pedidos" element={<Order />} />
      <Route path="novo-pedido" element={<NewOrder />} />
    </Route>
  </Routes>
  );
};

export default AppRoutes;
