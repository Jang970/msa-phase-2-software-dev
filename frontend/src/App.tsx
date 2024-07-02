import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shirts from "./pages/Shirts";
import Pants from "./pages/Pants";
import Jackets from "./pages/Jackets";
import Hats from "./pages/Hats";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="/hats" element={<Hats />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
