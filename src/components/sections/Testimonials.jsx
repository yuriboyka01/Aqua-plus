import React, { useEffect, useState } from 'react';

const TESTIS = [
  { id: 1, name: 'Rita K.', rating: 5, text: 'Excellent installation and follow-up. Water tastes great!' },
  { id: 2, name: 'Amit P.', rating: 4, text: 'Quick service and honest pricing.' },
  { id: 3, name: 'Sonal V.', rating: 5, text: 'Highly recommend their AMC plans.' }
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % TESTIS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="section-padding container">
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>What customers say</h2>
      <div className="card" style={{
        maxWidth: '800px', margin: '0 auto', padding: '3rem',
        background: 'linear-gradient(to bottom right, #ffffff, #f0f9ff)',
        border: '1px solid var(--secondary)'
      }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ fontSize: '4rem', lineHeight: 1, color: 'var(--primary)', opacity: 0.3, fontFamily: 'serif' }}>“</div>
          <div style={{ flex: 1 }}>
            <blockquote style={{ margin: 0, fontSize: '1.25rem', fontFamily: 'Outfit', fontWeight: 500, color: 'var(--text-main)', fontStyle: 'italic' }}>
              {TESTIS[i].text}
            </blockquote>
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>{TESTIS[i].name}</span>
              <span style={{ color: 'var(--border)' }}>|</span>
              <div style={{ color: 'var(--accent)', fontSize: '1rem' }}>
                {Array.from({ length: TESTIS[i].rating }).map((_, idx) => <span key={idx}>★</span>)}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button onClick={() => setI(x => (x - 1 + TESTIS.length) % TESTIS.length)} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>↑</button>
            <button onClick={() => setI(x => (x + 1) % TESTIS.length)} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>↓</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
