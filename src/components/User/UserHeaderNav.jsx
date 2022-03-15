import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as NewPost } from "../../Assets/adicionar.svg";
import { ReactComponent as Statistics } from "../../Assets/estatisticas.svg";
import { ReactComponent as MyPhotos } from "../../Assets/feed.svg";
import { ReactComponent as Logout } from "../../Assets/sair.svg";
import { UserContext } from "../../contexts/UserContext";
import useMedia from "../../hooks/useMedia";
import styles from "./UserHeaderNav.module.css";

export default function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem");
  const [menuMobile, setMenuMobile] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuMobile(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileBtn} ${
            menuMobile && styles.mobileBtnActive
          }`}
          aria-label="Menu"
          onClick={() => setMenuMobile(!menuMobile)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          menuMobile && styles.navMobileActive
        }`}
      >
        <NavLink title="Feed" to="/account" end>
          <MyPhotos /> {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink title="Estatísticas" to="/account/statistics">
          <Statistics />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink title="Adicionar nova foto" to="/account/new/post">
          <NewPost />
          {mobile && "Adicionar nova foto"}
        </NavLink>
        <button title="Sair" onClick={userLogout}>
          <Logout />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}
