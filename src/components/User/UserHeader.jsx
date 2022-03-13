import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./UserHeader.module.css";
import UserHeaderNav from "./UserHeaderNav";

export default function UserHeader() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/account") {
      setTitle("Feed");
    } else if (location.pathname === "/account/statistics") {
      setTitle("Estatísticas");
    } else if (location.pathname === "/account/new/post") {
      setTitle("Adicionar nova foto");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}
