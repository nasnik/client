import { Link } from "react-router-dom";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="mt-5">
      <h1>Admin Dashboard</h1>
      <Link to="/admin/add-restaurant">Add a new restaurant</Link>
    </div>
  );
};

export default AdminDashboard;
