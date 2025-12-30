import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

// user
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

// user pages
import Menu from './pages/user/menu.jsx';
import Cart from './pages/user/cart.jsx';
import Checkout from './pages/user/checkout.jsx';
import Confirmation from './pages/user/confirmation.jsx';

// admin pages
import AdminLogin from './pages/admin/login.jsx';
import AdminDashboard from './pages/admin/dashboard';
import QRGenerator from './pages/admin/QRgenerator.jsx';
import MenuEditor from './pages/admin/menuEditor.jsx';

// Layout for user pages
const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* ADMIN ROUTES */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/qr-generator" element={<QRGenerator />} />
      <Route path="/admin/menu-editor" element={<MenuEditor />} />

      {/* USER ROUTES */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
