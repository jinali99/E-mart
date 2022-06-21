import "./App.css";
import Home from "./component/home/Home";
import Navbar from "./component/Nav/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./component/product/Products";
import Product from "./component/product/Product";
import Cart from "./component/cart/Cart";
import Contact from "./component/contact/Contact";
import About from "./component/about/About";
// import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        

      </Routes>
    </div>
  );
}

export default App;
