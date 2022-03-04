import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";

import "./styles/global.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}
