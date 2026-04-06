import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Building, GraduationCap, Calendar, ArrowRight, Loader2 } from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    department: '',
    year: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const result = await signup(formData);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="auth-page" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--bg-main)',
      padding: '40px 20px'
    }}>
      <div className="auth-card" style={{
        width: '100%',
        maxWidth: '500px',
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-xl)',
        padding: '40px',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border-subtle)'
      }}>
        <div className="auth-header" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '32px', 
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            marginBottom: '8px'
          }}>evenzo</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Join the heartbeat of your campus.</p>
        </div>

        {error && (
          <div className="auth-error" style={{
            background: 'rgba(239, 68, 68, 0.1)',
            color: '#ef4444',
            padding: '12px',
            borderRadius: 'var(--radius-md)',
            fontSize: '13px',
            marginBottom: '20px',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Name */}
          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', marginBottom: '6px' }}>Full Name</label>
            <div style={{ position: 'relative' }}>
              <User size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="text" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* Email */}
          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', marginBottom: '6px' }}>College Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="email" name="email" placeholder="john@college.edu" required value={formData.email} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* Password */}
          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', marginBottom: '6px' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="password" name="password" placeholder="••••••••" required value={formData.password} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* College */}
          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', marginBottom: '6px' }}>College Name</label>
            <div style={{ position: 'relative' }}>
              <Building size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="text" name="college" placeholder="IIT Delhi" required value={formData.college} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* Department */}
          <div className="form-group">
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', marginBottom: '6px' }}>Branch</label>
            <div style={{ position: 'relative' }}>
              <GraduationCap size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="text" name="department" placeholder="CSE" required value={formData.department} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* Year */}
          <div className="form-group">
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', marginBottom: '6px' }}>Year</label>
            <div style={{ position: 'relative' }}>
              <Calendar size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="number" name="year" min="1" max="5" placeholder="3" required value={formData.year} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              gridColumn: 'span 2',
              background: 'var(--text-primary)',
              color: 'var(--bg-main)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              padding: '14px',
              fontSize: '14px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '12px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              transition: 'all 0.2s'
            }}
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : (
              <>Create Account <ArrowRight size={18} /></>
            )}
          </button>
        </form>

        <div className="auth-footer" style={{ textAlign: 'center', marginTop: '24px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
            Already have an account? {' '}
            <Link to="/login" style={{ color: 'var(--text-accent)', fontWeight: '500' }}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  background: 'var(--bg-surface)',
  border: '1px solid var(--border-medium)',
  borderRadius: 'var(--radius-md)',
  padding: '10px 10px 10px 38px',
  color: 'var(--text-primary)',
  fontSize: '14px',
  outline: 'none',
  transition: 'all 0.2s'
};
