export default function Signup() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#0A3D62' }}>Create Your DropStacker Pro Account</h1>
      <form style={{ maxWidth: '400px', margin: '2rem auto', backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <label>Name:</label>
        <input type="text" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        <label>Email:</label>
        <input type="email" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        <label>Password:</label>
        <input type="password" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        <button type="submit" style={{ width: '100%', padding: '0.8rem', backgroundColor: '#FFC107', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Sign Up</button>
      </form>
      <p style={{ textAlign: 'center' }}>
        Already have an account? <a href="/login" style={{ color: '#0A3D62' }}>Login</a>
      </p>
    </div>
  );
}
