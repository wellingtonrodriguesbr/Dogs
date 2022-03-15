import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/dogs.svg";
import { UserContext } from "../contexts/UserContext";
import styles from "../styles/Header.module.css";

export default function Header() {
  const { data } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Logo />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar conta
          </Link>
        )}
      </nav>
    </header>
  );
}
