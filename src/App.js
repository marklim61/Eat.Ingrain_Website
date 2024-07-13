import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home, About, Events, Shop, Contact, MobileHome, ProductDetail, CartModal } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1366);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  const addToCart = (product, quantity, size) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.size === size
    );

    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += parseInt(quantity);
      setCartItems(updatedCartItems);
    } else {
      const newItem = { ...product, quantity: parseInt(quantity), size };
      setCartItems([...cartItems, newItem]);
    }

    handleCartOpen();
  };

  const updateQuantity = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = quantity;
    setCartItems(updatedCartItems);
  };

  return (
    <div className="min-h-screen bg-white">
      <Router>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={isMobile ? <MobileHome /> : <Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart}/>} />
          </Routes>
        <ConditionalFooter />
        </div>
      </Router>
      <CartModal isOpen={isCartOpen} onClose={handleCartClose} cartItems={cartItems} updateQuantity={updateQuantity}/>
    </div>
  );
};

const ConditionalFooter = () => {
  const location = useLocation();

  // Don't render footer on the home page
  if (location.pathname === "/") {
    return null;
  }

  return <Footer />;
};

export default App;
