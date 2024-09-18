import { Routes, Route } from 'react-router-dom';
import Homepage from './pages';

// import Stock from './pages/Stock/Stock';
// import Order from './pages/Order/Order';
// import NewOrder from './pages/Order/NewOrder';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      {/* <Route path="/pedidos" element={<Order />} />
      <Route path="/novo-pedido" element={<NewOrder />} />  */}
    </Routes>
  );
};

export default AppRoutes;
