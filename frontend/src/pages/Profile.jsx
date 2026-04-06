import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { User, Mail, Building, GraduationCap, Calendar, Shield, Settings, ChevronRight } from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="app-layout">
      <Navbar />
      <Sidebar />
      <main className="main-feed" style={{ padding: '32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <header style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-primary)' }}>Profile Settings</h1>
              <p style={{ color: 'var(--text-secondary)' }}>Manage your campus identity and preferences.</p>
            </div>
            <button style={{ 
              padding: '10px 20px', 
              background: 'var(--bg-elevated)', 
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: '500'
            }}>Edit Profile</button>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            {/* Account Info Card */}
            <section style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
              <div style={{ padding: '24px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--text-accent) 0%, #b48e4d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '32px', fontWeight: '700' }}>
                  {user.name[0]}
                </div>
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: '600' }}>{user.name}</h2>
                  <p style={{ color: 'var(--text-accent)', fontSize: '14px', textTransform: 'capitalize' }}>{user.role} Account</p>
                </div>
              </div>
              
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                  <InfoItem icon={<Mail size={18} />} label="Email Address" value={user.email} />
                  <InfoItem icon={<Building size={18} />} label="College" value={user.college} />
                  <InfoItem icon={<GraduationCap size={18} />} label="Department" value={user.department} />
                  <InfoItem icon={<Calendar size={18} />} label="Academic Year" value={`${user.year}${getYearSuffix(user.year)} Year`} />
                </div>
              </div>
            </section>

            {/* Settings Sections */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <SettingsCard 
                icon={<Shield size={20} />} 
                title="Privacy & Security" 
                description="Manage your password and data sharing preferences."
              />
              <SettingsCard 
                icon={<Settings size={20} />} 
                title="App Preferences" 
                description="Customise your notifications and theme settings."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
      <div style={{ color: 'var(--text-muted)', marginTop: '2px' }}>{icon}</div>
      <div>
        <div style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', marginBottom: '4px' }}>{label}</div>
        <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '500' }}>{value || 'Not set'}</div>
      </div>
    </div>
  );
}

function SettingsCard({ icon, title, description }) {
  return (
    <div style={{ 
      background: 'var(--bg-card)', 
      borderRadius: 'var(--radius-xl)', 
      padding: '20px', 
      border: '1px solid var(--border-subtle)',
      cursor: 'pointer',
      transition: 'all 0.2s'
    }} className="settings-card-hover">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ padding: '8px', background: 'var(--bg-elevated)', borderRadius: '10px', color: 'var(--text-accent)' }}>{icon}</div>
        <ChevronRight size={18} color="var(--text-muted)" />
      </div>
      <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{title}</h3>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{description}</p>
    </div>
  );
}

function getYearSuffix(year) {
  if (year === 1) return 'st';
  if (year === 2) return 'nd';
  if (year === 3) return 'rd';
  return 'th';
}
