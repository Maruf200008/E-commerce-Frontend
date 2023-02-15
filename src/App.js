import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import OurStore from "./components/OurStore";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { Cart } from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CompireProduct from "./pages/CompireProduct";
import Contact from "./pages/Contact";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import PrivcyPolicy from "./pages/PrivcyPolicy";
import RefoundPolicy from "./pages/RefoundPolicy";
import ResetPassword from "./pages/ResetPassword";
import ShopingPolicy from "./pages/ShopingPolicy";
import Signup from "./pages/Signup";
import SingleBlog from "./pages/SingleBlog";
import SingleProduct from "./pages/SingleProduct";
import TermsAndCondition from "./pages/TermsAndCondition";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compire-product" element={<CompireProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="terms-condition" element={<TermsAndCondition />} />
            <Route path="shoping-policy" element={<ShopingPolicy />} />
            <Route path="refound-policy" element={<RefoundPolicy />} />
            <Route path="privcy-policy" element={<PrivcyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
