import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Import pages
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import TeamPage from './Pages/TeamPage';
import ContactPage from './Pages/ContactPage';
import OrderForm from './Pages/OrderForm'; 
import OrderSuccess from './Pages/OrderSuccess';  
import ProductsPage from './Pages/ProductsPage';
//import ScrollToTop from './Components/ScrollToTop';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Router>
       <ScrollToTop/>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
         
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/order/:productId" element={<OrderForm />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;