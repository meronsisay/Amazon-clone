import { Routes, Route } from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/Auth/SignUp";
import Payment from "./pages/payment/Payment";
import Cart from "./pages/cart/Cart";
import Layout from "./components/Layout/Layout";
import Orders from "./pages/orders/Orders";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/productDetail/ProductDetail";
function Routing() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:catagoryName" element={<Results />} />
        <Route path="/products/:productID" element={<ProductDetail />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
    </Layout>
  );
}

export default Routing;
