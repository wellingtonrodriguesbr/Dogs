import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStatistics from "./UserStatistics";

export default function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="new/post" element={<UserPhotoPost />} />
        <Route path="statistics" element={<UserStatistics />} />
      </Routes>
    </section>
  );
}
