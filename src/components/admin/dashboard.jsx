import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from './sidebar';
import Users from './users';
import Posts from './posts';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Routes>
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/posts" element={<Posts />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
