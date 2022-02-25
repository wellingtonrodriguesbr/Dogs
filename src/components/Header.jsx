import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
