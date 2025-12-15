

import React, { useState } from 'react';
import { PRODUCTS } from '../../data/products';

const PricingCalc = () => {
  const [productId, setProductId] = useState(PRODUCTS[0].id);
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('installation');
  const [result, setResult] = useState(null);

  const getLocationSurcharge = (loc) => {
    if (!loc) return 0;
    const l = loc.toLowerCase();
    if (l.includes('remote')) return 1200;
    if (l.includes('urban')) return 0;
    return 250;
  };

  const handleCalculate = () => {
    const p = PRODUCTS.find(x => x.id === productId);
    const base = p.price;
    const serviceCharge = serviceType === 'installation' ? 1500 : (serviceType === 'maintenance' ? 800 : 1000);
    const surcharge = getLocationSurcharge(location);
    const total = base + serviceCharge + surcharge;
    setResult({ base, serviceCharge, surcharge, total });
  };

  return (
    <section id="pricing" className="container" style={{padding:'2rem 0'}}>
      <h2>Pricing Calculator</h2>
      <div className="card" style={{marginTop:12}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12}}>
          <select className="input" value={productId} onChange={e => setProductId(e.target.value)}>
            {PRODUCTS.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <input className="input" placeholder="Location (city or 'remote')" value={location} onChange={e => setLocation(e.target.value)} />
          <select className="input" value={serviceType} onChange={e => setServiceType(e.target.value)}>
            <option value="installation">Installation</option>
            <option value="maintenance">Maintenance</option>
            <option value="filter-replacement">Filter Replacement</option>
          </select>
        </div>

        <div style={{marginTop:12}}>
          <button className="btn btn-primary" onClick={handleCalculate}>Calculate</button>
        </div>

        {result && (
          <div style={{marginTop:12,borderTop:'1px solid #e6e9ef',paddingTop:12}}>
            <div>Base Price: ₹{result.base.toLocaleString()}</div>
            <div>Service Charge: ₹{result.serviceCharge.toLocaleString()}</div>
            <div>Location Surcharge: ₹{result.surcharge.toLocaleString()}</div>
            <div style={{fontWeight:700,marginTop:6}}>Total: ₹{result.total.toLocaleString()}</div>
            <div style={{marginTop:8}}>
              <a href="#booking" className="btn btn-primary">Book this</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingCalc;
