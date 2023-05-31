"use client";

import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1>Tunes on Wax</h1>
      <button type="button" className={styles.navBtn}>
        <MenuIcon />
      </button>
    </header>
  );
}
