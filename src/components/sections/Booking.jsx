import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useInventory } from '../../context/InventoryContext';
import { Calendar, Phone, MapPin, Package } from 'lucide-react';

const Booking = () => {
  const { products } = useInventory();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const formRef = useRef(null);

  const [status, setStatus] = React.useState('idle');

  // Auto-focus on first input when section is scrolled to
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && formRef.current) {
            const firstInput = formRef.current.querySelector('input');
            if (firstInput) {
              setTimeout(() => firstInput.focus(), 300);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data) => {
    setStatus('sending');
    try {
      const { emailService } = await import('../../utils/emailService');
      await emailService.send({
        ...data,
        message: `New Booking Request: ${data.serviceType} for product ${data.productId || 'N/A'}. Date: ${data.preferredAt}. Address: ${data.address}`
      });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="booking" className="section-padding" style={{ background: 'white' }}>
      <div className="container">
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '3rem',
          background: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }} ref={formRef}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: '#f0f9ff',
              color: '#0369a1',
              borderRadius: '99px',
              fontWeight: 600,
              fontSize: '0.8125rem',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Quick Booking
            </div>
            <h2 style={{ color: '#0f172a', fontSize: '2.25rem', marginBottom: '0.75rem' }}>
              Schedule Your Service
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.0625rem', maxWidth: '600px', margin: '0 auto' }}>
              Fill out the form below and we'll get back to you within <strong style={{ color: '#0891b2' }}>60 minutes</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: '1.5rem' }}>
            {/* Row 1: Name and Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  fontSize: '0.875rem'
                }}>
                  <Phone size={16} color="#64748b" />
                  Full Name
                </label>
                <input
                  className="input"
                  placeholder="Enter your name"
                  style={{ border: '1px solid #e2e8f0' }}
                  {...register('name', { required: true })}
                />
                {errors.name && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>Name is required</div>}
              </div>

              <div>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  fontSize: '0.875rem'
                }}>
                  <Phone size={16} color="#64748b" />
                  Phone Number
                </label>
                <input
                  className="input"
                  placeholder="10-digit mobile number"
                  style={{ border: '1px solid #e2e8f0' }}
                  {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })}
                />
                {errors.phone && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>Enter valid 10-digit phone</div>}
              </div>
            </div>

            {/* Row 2: Service Type and Product */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  fontSize: '0.875rem'
                }}>
                  <Package size={16} color="#64748b" />
                  Service Type
                </label>
                <select className="input" style={{ border: '1px solid #e2e8f0' }} {...register('serviceType', { required: true })}>
                  <option value="installation">Installation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="filter-replacement">Filter Replacement</option>
                  <option value="repair">Repair</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  fontSize: '0.875rem'
                }}>
                  <Package size={16} color="#64748b" />
                  Product (Optional)
                </label>
                <select className="input" style={{ border: '1px solid #e2e8f0' }} {...register('productId')}>
                  <option value="">-- Select Product --</option>
                  {products.map(p => <option key={p.id} value={p.id} disabled={p.stock === 0}>{p.name}{p.stock === 0 ? ' (Out of stock)' : ''}</option>)}
                </select>
              </div>
            </div>

            {/* Row 3: Date & Time */}
            <div>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                fontWeight: 600,
                color: '#0f172a',
                fontSize: '0.875rem'
              }}>
                <Calendar size={16} color="#64748b" />
                Preferred Date & Time
              </label>
              <input
                type="datetime-local"
                className="input"
                style={{ border: '1px solid #e2e8f0' }}
                {...register('preferredAt', { required: true })}
              />
              {errors.preferredAt && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>Please select a date and time</div>}
            </div>

            {/* Row 4: Address */}
            <div>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                fontWeight: 600,
                color: '#0f172a',
                fontSize: '0.875rem'
              }}>
                <MapPin size={16} color="#64748b" />
                Service Address
              </label>
              <textarea
                className="input"
                rows={3}
                placeholder="Enter your complete address"
                style={{ border: '1px solid #e2e8f0' }}
                {...register('address', { required: true })}
              ></textarea>
              {errors.address && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>Address is required</div>}
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div style={{
                background: '#dcfce7',
                color: '#166534',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: '0.9375rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Booking sent successfully! We will confirm shortly.
              </div>
            )}

            {status === 'error' && (
              <div style={{
                background: '#fee2e2',
                color: '#991b1b',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: '0.9375rem',
                fontWeight: 600
              }}>
                Failed to send booking. Please try WhatsApp or call us directly.
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <button
                type="submit"
                className="btn"
                disabled={isSubmitting || status === 'sending'}
                style={{
                  flex: '1',
                  minWidth: '200px',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #0891b2, #0369a1)',
                  color: 'white',
                  border: 'none',
                  fontWeight: 600,
                  padding: '1rem 1.5rem'
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Confirm Booking'}
              </button>

              <button
                type="button"
                className="btn"
                onClick={() => window.open('https://wa.me/917010329920', '_blank')}
                style={{
                  flex: '1',
                  minWidth: '200px',
                  justifyContent: 'center',
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  fontWeight: 600,
                  padding: '1rem 1.5rem'
                }}
              >
                WhatsApp Instead
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
