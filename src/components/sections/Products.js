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
    <section id="products" className="section-padding" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: '#f0f9ff',
              color: '#0369a1',
              borderRadius: '99px',
              fontWeight: 600,
              fontSize: '0.8125rem',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Our Products
            </div>
            <h2 style={{ color: '#0f172a', fontSize: '2.25rem', marginBottom: '0.5rem' }}>Premium Purifiers</h2>
            <p style={{ color: '#64748b' }}>High-performance machines for every need</p>
          </div>
          <div style={{ position: 'relative', width: '300px' }}>
            <input
              className="input"
              placeholder="Search model..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                paddingLeft: '3rem',
                border: '1px solid #e2e8f0',
                background: 'white'
              }}
            />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="card"
              style={{
                padding: '0',
                overflow: 'hidden',
                background: 'white',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: p.stock > 0 ? '#10b981' : '#f59e0b',
                  color: 'white',
                  padding: '0.375rem 0.875rem',
                  borderRadius: '99px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  {p.stock > 0 ? 'In Stock' : 'Limited Stock'}
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: '0.75rem',
                  color: '#0f172a'
                }}>{p.name}</h3>

                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{
                    background: '#f0f9ff',
                    color: '#0369a1',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '99px',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    {p.stages} Stage
                  </span>
                  {p.tankCapacityLiters && (
                    <span style={{
                      background: '#f0f9ff',
                      color: '#0369a1',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '99px',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      {p.tankCapacityLiters}L Storage
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
                  <button
                    className="btn"
                    onClick={() => setSelected(p)}
                    style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.875rem',
                      width: '100%',
                      justifyContent: 'center',
                      background: 'transparent',
                      color: '#0891b2',
                      border: '1px solid #e2e8f0',
                      fontWeight: 600
                    }}
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => handleEnquire(p)}
                    className="btn"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'linear-gradient(135deg, #0891b2, #0369a1)',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1rem',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    Enquire Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  );
};

export default Products;
