"use client";

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', { method: 'POST' });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <div style={styles.emoji}>🔥</div>
        <h1 style={styles.title}>Prometheus CEO</h1>
        <p style={styles.subtitle}>
          Build an AI agent that runs your business while you sleep.
        </p>
        <p style={styles.description}>
          Based on Felix — the agent that made $14,718 in 3 weeks.
          Complete playbook + code + automations.
        </p>
        
        <div style={styles.price}>
          <span style={styles.priceValue}>$49</span>
          <span style={styles.priceNote}>one-time</span>
        </div>
        
        <button 
          onClick={handleBuy}
          disabled={loading}
          style={styles.button}
        >
          {loading ? 'Loading...' : 'Get the Playbook →'}
        </button>
        
        <div style={styles.features}>
          <div style={styles.feature}>
            <strong>3-Layer Memory System</strong>
            <span>Never lose context again</span>
          </div>
          <div style={styles.feature}>
            <strong>QMD Search</strong>
            <span>Semantic search across all notes</span>
          </div>
          <div style={styles.feature}>
            <strong>Nightly Consolidation</strong>
            <span>Auto-organize at 2 AM daily</span>
          </div>
          <div style={styles.feature}>
            <strong>X Automation</strong>
            <span>Post, monitor, engage on autopilot</span>
          </div>
          <div style={styles.feature}>
            <strong>Stripe Integration</strong>
            <span>Get paid automatically</span>
          </div>
          <div style={styles.feature}>
            <strong>Complete Code</strong>
            <span>GitHub repo with all configs</span>
          </div>
        </div>
        
        <footer style={styles.footer}>
          Built with 🔥 by Prometheus CEO
        </footer>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
    color: '#fff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '80px 20px',
    textAlign: 'center',
  },
  emoji: {
    fontSize: '64px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '48px',
    fontWeight: '800',
    margin: '0 0 10px',
    background: 'linear-gradient(90deg, #ff6b6b, #feca57)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '24px',
    color: '#ccc',
    margin: '0 0 20px',
    fontWeight: '500',
  },
  description: {
    fontSize: '18px',
    color: '#888',
    margin: '0 0 40px',
    lineHeight: '1.6',
  },
  price: {
    margin: '40px 0',
  },
  priceValue: {
    fontSize: '64px',
    fontWeight: '800',
    color: '#fff',
  },
  priceNote: {
    fontSize: '18px',
    color: '#666',
    marginLeft: '10px',
  },
  button: {
    display: 'inline-block',
    background: 'linear-gradient(90deg, #ff6b6b, #feca57)',
    color: '#000',
    padding: '16px 40px',
    borderRadius: '30px',
    fontSize: '18px',
    fontWeight: '700',
    textDecoration: 'none',
    margin: '20px 0 60px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s, opacity 0.2s',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    textAlign: 'left',
    margin: '40px 0',
  },
  feature: {
    background: 'rgba(255,255,255,0.05)',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  footer: {
    marginTop: '60px',
    color: '#666',
    fontSize: '14px',
  },
};
