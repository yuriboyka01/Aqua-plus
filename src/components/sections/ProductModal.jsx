import React from 'react';
import { openWhatsApp, createProductEnquiry } from '../../utils/whatsappUtils';

const ProductModal = ({ product, onClose }) => {
  const handleEnquire = () => {
    const message = createProductEnquiry(product);
    openWhatsApp(message);
    onClose();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60 }} onClick={onClose}>
      <div style={{ width: '90%', maxWidth: 880, background: 'white', borderRadius: 8, padding: 20, position: 'relative' }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', right: 12, top: 12, border: 0, background: 'transparent', fontSize: 18, cursor: 'pointer' }}>✕</button>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <img src={product.img} alt={product.name} style={{ width: 220, height: 220, objectFit: 'cover', borderRadius: 8 }} />
          <div style={{ flex: 1 }}>
            <h3 style={{ marginTop: 0 }}>{product.name}</h3>
            <div style={{ color: '#6b7280' }}>Brand: {product.brand} • Warranty: {product.warrantyMonths} months</div>

            {/* Removed Price Display */}

            <ul style={{ marginTop: 10, color: '#374151' }}>
              {Object.entries(product.specs).map(([k, v]) => (
                <li key={k}><strong>{k}:</strong> {Array.isArray(v) ? v.join(', ') : v}</li>
              ))}
            </ul>

            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button
                onClick={handleEnquire}
                className="btn-enquire btn-pulse hover-scale"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Enquire Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={handleEnquire}
                className="btn btn-secondary hover-scale"
              >
                Book Installation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

