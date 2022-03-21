import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
}
