export default function Footer() {
  return (
    <footer style={{
      background: "#0d1b2a",
      color: "white",
      textAlign: "center",
      padding: "1rem",
      marginTop: "2rem"
    }}>
      <p>© {new Date().getFullYear()} DropStacker Pro. All Rights Reserved.</p>
    </footer>
  );
}
