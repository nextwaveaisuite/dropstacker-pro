import '../styles/theme.css';

export default function Login() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#0A3D62', paddingTop: '2rem' }}>
        Login to DropStacker Pro
      </h1>
      <form className="form-container">
        <label>Email:</label>
        <input type="email" required />
        <label>Password:</label>
        <input type="password" required />
        <button type="submit">Login</button>
      </form>
      <p style={{ textAlign: 'center' }}>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
          }
