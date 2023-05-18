import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1>Tunes on Wax</h1>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/discovery"}>Discover records</Link>
      </nav>
    </header>
  );
}
