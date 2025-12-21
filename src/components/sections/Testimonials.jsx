import React, { useEffect, useState } from 'react';

// Real Google Reviews from Aqua Plus RO Tech Thirunagar - Madurai
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Vengat Murthi',
    rating: 5,
    text: 'Express Service. Reasonable charge. Diagnose like a Doctor. They made the water as an Amrita.',
    date: '23 weeks ago',
    verified: true
  },
  {
    id: 2,
    name: 'Perumal Raja',
    rating: 5,
    text: 'Good quality product and friendly service👍🏻. Thanks to Mr.Tamilmaran. 😍',
    date: 'Aug 2023',
    verified: true
  },
  {
    id: 3,
    name: 'VEL MURUGAN',
    rating: 5,
    text: 'Best service in this RO field and products also very genuine.',
    date: 'Nov 2021',
    verified: true
  },
  {
    id: 4,
    name: 'Nagadeepak V',
    rating: 5,
    text: 'Best Service. Good Experience. Customer Satisfaction work.',
    date: '24 weeks ago',
    verified: true
  },
  {
    id: 5,
    name: 'Venil Ilavarasan',
    rating: 5,
    text: 'Good quality product and service is really good 👍',
    date: 'Nov 2022',
    verified: true
  },
  {
    id: 6,
    name: 'NAGARAJAN RAMAN',
    rating: 5,
    text: 'Purchased now working in good condition.',
    date: 'May 2022',
    verified: true
  },
  {
    id: 7,
    name: 'Shanmugam Kallikudi',
    rating: 5,
    text: 'Good service',
    date: 'Nov 2024',
    verified: true
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(x => (x + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(x => (x - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex(x => (x + 1) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="section-padding container" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
      {/* Section Header with Google Rating Badge */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
          What Our Customers Say
        </h2>

        {/* Google Rating Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1rem',
          background: 'white',
          padding: '1rem 2rem',
          borderRadius: '50px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          marginBottom: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107" />
              <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00" />
              <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50" />
              <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2" />
            </svg>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: '700', fontSize: '1.5rem', color: '#1a1a1a', lineHeight: 1 }}>4.9</div>
              <div style={{ fontSize: '0.75rem', color: '#666' }}>Google Rating</div>
            </div>
          </div>
          <div style={{ height: '40px', width: '1px', background: '#e5e7eb' }}></div>
          <div>
            <div style={{ color: '#fbbf24', fontSize: '1.25rem' }}>★★★★★</div>
            <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.25rem' }}>11+ Reviews</div>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          Trusted by 500+ families in Madurai
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="card" style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '3rem',
        background: 'white',
        border: '1px solid #e5e7eb',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }}>
        {/* Verified Badge */}
        {currentTestimonial.verified && (
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            Verified Review
          </div>
        )}

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          {/* Quote Icon */}
          <div style={{
            fontSize: '4rem',
            lineHeight: 1,
            color: 'var(--primary)',
            opacity: 0.2,
            fontFamily: 'serif',
            marginTop: '-0.5rem'
          }}>
            "
          </div>

          <div style={{ flex: 1 }}>
            {/* Star Rating */}
            <div style={{
              color: '#fbbf24',
              fontSize: '1.5rem',
              marginBottom: '1rem',
              letterSpacing: '2px'
            }}>
              {Array.from({ length: currentTestimonial.rating }).map((_, idx) => (
                <span key={idx}>★</span>
              ))}
            </div>

            {/* Review Text */}
            <blockquote style={{
              margin: 0,
              fontSize: '1.25rem',
              fontFamily: 'Outfit',
              fontWeight: 500,
              color: 'var(--text-main)',
              fontStyle: 'italic',
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              {currentTestimonial.text}
            </blockquote>

            {/* Customer Info */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid #e5e7eb'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                {currentTestimonial.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--primary-dark)', fontSize: '1.1rem' }}>
                  {currentTestimonial.name}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  {currentTestimonial.date}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              onClick={handlePrev}
              className="btn btn-secondary hover-scale"
              style={{
                padding: '0.75rem 1rem',
                minWidth: '50px',
                fontSize: '1.25rem'
              }}
              aria-label="Previous review"
            >
              ↑
            </button>
            <button
              onClick={handleNext}
              className="btn btn-secondary hover-scale"
              style={{
                padding: '0.75rem 1rem',
                minWidth: '50px',
                fontSize: '1.25rem'
              }}
              aria-label="Next review"
            >
              ↓
            </button>
          </div>
        </div>

        {/* Testimonial Counter */}
        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: 'var(--text-muted)',
          fontSize: '0.875rem'
        }}>
          {currentIndex + 1} / {TESTIMONIALS.length}
        </div>
      </div>

      {/* View All Reviews Button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://www.google.com/search?q=aqua+plus+thirunagar"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hover-lift"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.875rem 2rem'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="currentColor" />
          </svg>
          View All Reviews on Google
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
