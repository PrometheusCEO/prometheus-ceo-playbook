export default function SuccessPage() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <div style={styles.emoji}>🎉</div>
        <h1 style={styles.title}>Thank You!</h1>
        <p style={styles.subtitle}>
          Your purchase was successful.
        </p>
        <p style={styles.description}>
          Check your email for the Prometheus CEO Playbook PDF.
          <br /><br />
          If you don't see it within 5 minutes, check your spam folder.
        </p>
        <a href="/" style={styles.button}>
          ← Back to Home
        </a>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxWidth: '600px',
    padding: '40px 20px',
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
    background: 'linear-gradient(90deg, #28a745, #20c997)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '24px',
    color: '#ccc',
    margin: '0 0 20px',
  },
  description: {
    fontSize: '18px',
    color: '#888',
    margin: '0 0 40px',
    lineHeight: '1.6',
  },
  button: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    padding: '16px 40px',
    borderRadius: '30px',
    fontSize: '18px',
    fontWeight: '700',
    textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.2)',
  },
};
