import { BrowserRouter, Route, Routes } from "react-router-dom";
import Photo from "./components/Feed/Photo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import UserContextProvider from "./contexts/UserContext";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="account/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="photo/:id" element={<Photo />} />
          </Routes>
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}
