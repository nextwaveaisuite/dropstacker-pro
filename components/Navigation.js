import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/">DropStacker Pro</Link>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
        <ul className={`${styles.links} ${isOpen ? styles.show : ""}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/storebuilder">Store Builder</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
            }
