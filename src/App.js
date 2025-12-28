import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InventoryProvider } from './context/InventoryContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';

import StickyMobileBar from './components/layout/StickyMobileBar';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <InventoryProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="pb-16 md:pb-0"> {/* Add padding bottom on mobile for sticky bar */}
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/process" element={<ProcessPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <StickyMobileBar />
        </div>
      </Router>
    </InventoryProvider>
  );
}

export default App;
