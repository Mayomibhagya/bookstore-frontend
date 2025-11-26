import React from "react";
import "./Admin.css";

const Admin: React.FC = () => {
  return (
    <section className="admin-page">
      <div className="admin-card">
        <p className="eyebrow">Internal Tools</p>
        <h1>Admin Dashboard</h1>
        <p>
          Manage inventory, feature books, and review customer carts. This section will be expanded with real data in future iterations.
        </p>
        <ul>
          <li>Upload new books</li>
          <li>Update pricing and promotions</li>
          <li>Review orders and user feedback</li>
        </ul>
      </div>
    </section>
  );
};

export default Admin;
