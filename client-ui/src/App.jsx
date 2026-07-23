import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProduct from "./pages/Dashboard_Layout/EditProduct.jsx";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Navbar from "./components/navbar.jsx";
import "./css/toast.css";
import Home from "./pages/home.jsx";
import Cart from "./pages/Cart.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Wishlist from "./pages/Wishlist.jsx";

// Dashboard Pages
import DashboardHome from "./pages/Dashboard_Layout/DashboardHome.jsx";
import Products from "./pages/Dashboard_Layout/Products.jsx";
import AddProduct from "./pages/Dashboard_Layout/AddProduct.jsx";
import Orders from "./pages/Dashboard_Layout/Orders.jsx";
import Users from "./pages/Dashboard_Layout/Users.jsx";
import Analytics from "./pages/Dashboard_Layout/Analytics.jsx";
import Settings from "./pages/Dashboard_Layout/Settings.jsx";
import Customers from "./pages/Dashboard_Layout/Customers.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const isLoggedIn = true;
  const hideNavbar = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideNavbar && <Navbar
        cart={cart}
        wishlist={wishlist}
      />}

      <Routes>
        {/* Public Routes */}

        <Route path="/" element={
          <Home
            wishlist={wishlist}
            setWishlist={setWishlist}
          />
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="products" element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="customers" element={<Customers />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss={false}
        theme="light"

        icon={true}

        limit={3}

        stacked

        toastStyle={{
          borderRadius: "14px",
          padding: "14px 16px",
        }}
      />

    </>
  );
}
export default App;