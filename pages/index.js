export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Welcome to DropStacker Pro 🚀</h1>
      <p>
        This is your main landing page. Edit <code>pages/index.js</code> to
        customize the content.
      </p>
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/dashboard">Go to Dashboard</a></li>
      </ul>
    </div>
  );
}
