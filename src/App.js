import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home, About, Events, Shop, Contact, MobileHome } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1366);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          </Routes>
        <ConditionalFooter />
        </div>
      </Router>
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
