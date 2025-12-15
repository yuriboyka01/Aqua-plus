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
    <section id="booking" className="section-padding container particle-bg dynamic-gradient" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2), transparent)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0
      }} />

      <div className="card animate-slide-up pulse-glow-accent" style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '3rem',
        boxShadow: 'var(--shadow-glow-accent)',
        position: 'relative',
        zIndex: 1,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)'
      }} ref={formRef}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="enquiry-badge" style={{ marginBottom: '1.5rem' }}>
            📅 Quick Booking
          </div>
          <h2 className="text-gradient-vibrant" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>
            Schedule Your Service
          </h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Fill out the form below and we'll get back to you within <strong style={{ color: 'var(--accent)' }}>60 minutes</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: '1.5rem' }}>
          {/* Row 1: Name and Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div>
              <label className="text-sm" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: 'var(--text-main)'
              }}>
                <Phone size={16} />
                Full Name
              </label>
              <input
                className="input"
                placeholder="Enter your name"
                {...register('name', { required: true })}
              />
              {errors.name && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>Name is required</div>}
            </div>

            <div>
              <label className="text-sm" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: 'var(--text-main)'
              }}>
                <Phone size={16} />
                Phone Number
              </label>
              <input
                className="input"
                placeholder="10-digit mobile number"
                {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })}
              />
              {errors.phone && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>Enter valid 10-digit phone</div>}
            </div>
          </div>

          {/* Row 2: Service Type and Product */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div>
              <label className="text-sm" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: 'var(--text-main)'
              }}>
                <Package size={16} />
                Service Type
              </label>
              <select className="input" {...register('serviceType', { required: true })}>
                <option value="installation">Installation</option>
                <option value="maintenance">Maintenance</option>
                <option value="filter-replacement">Filter Replacement</option>
                <option value="repair">Repair</option>
              </select>
            </div>

            <div>
              <label className="text-sm" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: 'var(--text-main)'
              }}>
                <Package size={16} />
                Product (Optional)
              </label>
              <select className="input" {...register('productId')}>
                <option value="">-- Select Product --</option>
                {products.map(p => <option key={p.id} value={p.id} disabled={p.stock === 0}>{p.name}{p.stock === 0 ? ' (Out of stock)' : ''}</option>)}
              </select>
            </div>
          </div>

          {/* Row 3: Date & Time */}
          <div>
            <label className="text-sm" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: 'var(--text-main)'
            }}>
              <Calendar size={16} />
              Preferred Date & Time
            </label>
            <input
              type="datetime-local"
              className="input"
              {...register('preferredAt', { required: true })}
            />
            {errors.preferredAt && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>Please select a date and time</div>}
          </div>

          {/* Row 4: Address */}
          <div>
            <label className="text-sm" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: 'var(--text-main)'
            }}>
              <MapPin size={16} />
              Service Address
            </label>
            <textarea
              className="input"
              rows={3}
              placeholder="Enter your complete address"
              {...register('address', { required: true })}
            ></textarea>
            {errors.address && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>Address is required</div>}
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div style={{
              background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
              color: '#166534',
              padding: '1rem',
              borderRadius: 'var(--radius-lg)',
              fontSize: '0.95rem',
              fontWeight: '600',
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
              background: 'linear-gradient(135deg, #fee2e2, #fecaca)',
              color: '#991b1b',
              padding: '1rem',
              borderRadius: 'var(--radius-lg)',
              fontSize: '0.95rem',
              fontWeight: '600'
            }}>
              Failed to send booking. Please try WhatsApp or call us directly.
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <button
              type="submit"
              className="btn btn-primary btn-ripple hover-lift"
              disabled={isSubmitting || status === 'sending'}
              style={{ flex: '1', minWidth: '200px', justifyContent: 'center' }}
            >
              {status === 'sending' ? 'Sending...' : 'Confirm Booking'}
            </button>

            <button
              type="button"
              className="btn btn-secondary hover-lift"
              onClick={() => window.open('https://wa.me/917010329920', '_blank')}
              style={{ flex: '1', minWidth: '200px', justifyContent: 'center' }}
            >
              WhatsApp Instead
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;

