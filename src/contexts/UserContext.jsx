import React, { createContext, useState } from "react";
import { tokenPost, userGet } from "../services/api";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getUser(token) {
    const { url, options } = userGet(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      const { url, options } = tokenPost({ username, password });
      const tokenResponse = await fetch(url, options);
      const { token } = tokenResponse.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
    } catch (error) {
      setLogin(false);
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, data, login, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}
