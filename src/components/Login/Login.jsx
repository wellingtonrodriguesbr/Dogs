import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

export default function Login() {
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
