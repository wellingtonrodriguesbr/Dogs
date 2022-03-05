import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

export default function Login() {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/account" />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/create" element={<LoginCreate />} />
        <Route path="/password/lost" element={<LoginPasswordLost />} />
        <Route path="/password/reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}
