import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as NewPost } from "../../Assets/adicionar.svg";
import { ReactComponent as Statistics } from "../../Assets/estatisticas.svg";
import { ReactComponent as MyPhotos } from "../../Assets/feed.svg";
import { ReactComponent as Logout } from "../../Assets/sair.svg";
import { UserContext } from "../../contexts/UserContext";
import styles from "./UserHeaderNav.module.css";

export default function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const [mobile, setMobile] = useState(null);
  return (
    <nav className={styles.nav}>
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
  );
}
