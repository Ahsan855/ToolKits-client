import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <Outlet />
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          <li>
            <Link to='/dashboard/myorders'>My Orders</Link>
          </li>
          <li>
            <Link to='/dashboard/addreview'>Add Review</Link>
          </li>
          <li>
            <Link to='/dashboard/myprofile'>My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
