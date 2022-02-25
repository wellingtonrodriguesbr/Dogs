import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/dogs.svg";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Logo />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar conta
        </Link>
      </nav>
    </header>
  );
}
