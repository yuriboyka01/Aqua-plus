import React, { useMemo, useState } from 'react';
import { useInventory } from '../../context/InventoryContext';
import ProductModal from './ProductModal';
import { openWhatsApp, createProductEnquiry } from '../../utils/whatsappUtils';

const Products = () => {
  const { products } = useInventory();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => products.filter(p =>
    (!query || p.name.toLowerCase().includes(query.toLowerCase())) && p.capacityLph < 25
  ), [products, query]);

  const handleEnquire = (product) => {
    const message = createProductEnquiry(product);
    openWhatsApp(message);
  };

  return (
    <section id="products" className="section-padding container particle-bg">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <div>
          <h2 className="text-gradient-vibrant">Premium Purifiers</h2>
          <p className="text-muted">High-performance machines for every need</p>
        </div>
        <div style={{ position: 'relative', width: '300px' }}>
          <input
            className="input"
            placeholder="Search model..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ paddingLeft: '3rem' }}
          />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      <div className="grid-cols-3">
        {filtered.map((p, index) => (
          <article
            key={p.id}
            className="card hover-lift animate-slide-up"
            style={{
              padding: '1.5rem',
              animationDelay: `${index * 0.1}s`,
              position: 'relative',
              overflow: 'visible'
            }}
          >
            <div className="product-image-container" style={{ position: 'relative' }}>
              <img src={p.img} alt={p.name} className="product-image" loading="lazy" />
              <div style={{
                position: 'absolute', top: '1rem', right: '1rem',
                background: p.stock > 0 ? 'var(--gradient-success)' : 'var(--gradient-accent)',
                color: 'white',
                padding: '0.35rem 0.85rem',
                borderRadius: '99px',
                fontSize: '0.75rem',
                fontWeight: 700,
                boxShadow: p.stock > 0 ? '0 4px 15px rgba(16, 185, 129, 0.4)' : '0 4px 15px rgba(249, 115, 22, 0.4)',
                animation: 'pulse-scale 2s ease-in-out infinite'
              }}>
                {p.stock > 0 ? '✓ In Stock' : 'Limited Stock'}
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>{p.name}</h3>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '99px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {p.stages} Stage
                </span>
                <span>•</span>
                <span style={{ fontWeight: '600', color: 'var(--primary)' }}>{p.capacityLph}L/hr</span>
              </div>
            </div>

            {/* Removed Price Display */}

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', flexDirection: 'column' }}>
              <button
                className="btn btn-secondary hover-scale"
                onClick={() => setSelected(p)}
                style={{
                  padding: '0.75rem 1rem',
                  fontSize: '0.875rem',
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                View Details
              </button>

              <button
                onClick={() => handleEnquire(p)}
                className="btn-enquire btn-pulse hover-scale"
                style={{
                  width: '100%',
                  justifyContent: 'center',
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
            </div>
          </article>
        ))}
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Products;

