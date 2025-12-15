import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InventoryProvider } from './context/InventoryContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <InventoryProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </InventoryProvider>
  );
}

export default App;
