import "../styles/theme.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "70px" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
  }
