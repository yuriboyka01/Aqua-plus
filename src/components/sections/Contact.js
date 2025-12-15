import React from 'react';

const Contact = () => (
  <section id="contact" className="section-padding container">
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h2 className="text-gradient">Contact Us</h2>
      <p className="text-muted">We are just a call or message away.</p>
    </div>

    <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem', alignItems: 'start' }}>

      {/* Contact Info Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Phone Contact Card */}
        <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ background: '#ecfeff', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Call Us Now</div>
            <a href="tel:+917010329920" style={{ display: 'block', color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>+91 70103 29920</a>
            <a href="tel:+916385786516" style={{ display: 'block', color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>+91 63857 86516</a>
          </div>
        </div>

        {/* Email Contact Card */}
        <a href="mailto:aquaplusrosales@gmail.com" className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none' }}>
          <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '50%', color: 'var(--success)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Email Us</div>
            <div style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>aquaplusrosales@gmail.com</div>
          </div>
        </a>

        {/* Location Card */}
        <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ background: '#fff7ed', padding: '1rem', borderRadius: '50%', color: 'var(--accent)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Visit Our Office</div>
            <div style={{ color: 'var(--text-muted)' }}>
              Thirunagar 5th Stop,<br />
              Madurai - 625006
            </div>
          </div>
        </div>

        {/* Instagram Card */}
        <a href="https://www.instagram.com/aquaplus.ro.service/" target="_blank" rel="noreferrer" className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none', transition: 'transform 0.2s' }}>
          <div style={{ background: '#fdf2f8', padding: '1rem', borderRadius: '50%', color: '#db2777' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Follow on Instagram</div>
            <div style={{ color: 'var(--text-muted)' }}>@aquaplus.ro.service</div>
          </div>
        </a>
      </div>

      {/* Booking Form (Smaller) */}
      <div className="card">
        <h4 style={{ marginBottom: '1rem' }}>Request a Callback</h4>
        <ContactForm />
      </div>
    </div>

    {/* Mobile-specific styles */}
    <style jsx>{`
      @media (max-width: 768px) {
        .contact-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
);

const ContactForm = () => {
  const [status, setStatus] = React.useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      message: 'Callback Request from Contact Section'
    };

    try {
      // Dynamic import to avoid circular dependencies if any, or just import at top
      const { emailService } = await import('../../utils/emailService');
      await emailService.send(formData);
      setStatus('success');
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
        <input className="input" name="name" placeholder="Your Name" required disabled={status === 'sending'} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>Mobile Number</label>
        <input className="input" name="phone" type="tel" placeholder="Contact Number" required pattern="[0-9]{10}" disabled={status === 'sending'} />
      </div>

      {status === 'success' && <div style={{ color: 'green', marginBottom: '1rem', fontSize: '0.9rem' }}>✓ Request sent successfully!</div>}
      {status === 'error' && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>✗ Failed to send. Please call us directly.</div>}

      <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Request Call'}
      </button>
    </form>
  );
};


export default Contact;
