import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";
import MyProfile from "./pages/MyProfile";
import SpecialProduct from "./pages/SpecialProduct";
import ConnectionStatusNotification from "./components/ConnectionStatusNotification";

const App = () => {
  return (
    <div className="App">
      <ConnectionStatusNotification/>
      <ToastContainer />
      <Navbar />
      <SearchBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/Verify" element={<Verify />} />
        <Route path="/special/:categoryName" element={<SpecialProduct />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
