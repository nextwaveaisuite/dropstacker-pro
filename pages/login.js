export default function Login() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#0A3D62' }}>Login to DropStacker Pro</h1>
      <form style={{ maxWidth: '400px', margin: '2rem auto', backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <label>Email:</label>
        <input type="email" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        <label>Password:</label>
        <input type="password" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        <button type="submit" style={{ width: '100%', padding: '0.8rem', backgroundColor: '#FFC107', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>
      </form>
      <p style={{ textAlign: 'center' }}>
        Don't have an account? <a href="/signup" style={{ color: '#0A3D62' }}>Sign Up</a>
      </p>
    </div>
  );
}
