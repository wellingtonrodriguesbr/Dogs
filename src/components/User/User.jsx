import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStatistics from "./UserStatistics";

export default function User() {
  const { data } = useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="new/post" element={<UserPhotoPost />} />
        <Route path="statistics" element={<UserStatistics />} />
      </Routes>
    </section>
  );
}
