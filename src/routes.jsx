import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage/Homepage";
import Stock from "./pages/Stock/Stock";
import NewOrder from "./pages/NewOrder/NewOrder";
import Orders from "./pages/Order/Order";

const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="estoque" element={<Stock />} />
      <Route path="pedidos" element={<Orders />} />
      <Route path="novo-pedido" element={<NewOrder />} />
    </Route>
  </Routes>
  );
};

export default AppRoutes;
