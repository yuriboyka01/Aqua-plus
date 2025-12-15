import React, { createContext, useContext, useEffect, useState } from 'react';
import { PRODUCTS } from '../data/products';

const InventoryContext = createContext();
export const useInventory = () => useContext(InventoryContext);

export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchInventory = async () => {
      setLoading(true);
      try {
        // Replace with axios call to your API when ready
        // const { data } = await axios.get('/api/inventory');
        // setProducts(data);
        // Demo: keep PRODUCTS as-is
        if (mounted) setProducts(PRODUCTS);
      } catch (err) {
        console.error('inventory error', err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchInventory();
    const id = setInterval(fetchInventory, 30000); // refresh every 30s (adjust)
    return () => { mounted = false; clearInterval(id); };
  }, []);

  const reduceStock = (productId, qty = 1) => {
    setProducts(prev => prev.map(p => p.id === productId ? { ...p, stock: Math.max(0, p.stock - qty) } : p));
  };

  const setProductStock = (productId, qty) => {
    setProducts(prev => prev.map(p => p.id === productId ? { ...p, stock: qty } : p));
  };

  return (
    <InventoryContext.Provider value={{ products, loading, reduceStock, setProductStock }}>
      {children}
    </InventoryContext.Provider>
  );
};
