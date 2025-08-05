export default function Signup() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#0A3D62', paddingTop: '2rem' }}>
        Create Your DropStacker Pro Account
      </h1>
      <form className="form-container">
        <label>Name:</label>
        <input type="text" required />
        <label>Email:</label>
        <input type="email" required />
        <label>Password:</label>
        <input type="password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p style={{ textAlign: 'center' }}>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
          }
