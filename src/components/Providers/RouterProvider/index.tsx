import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../../../pages/Dashboard";
import Login from "../../../pages/Authentication/Login";
import CreateCoupon from "../../../pages/Dashboard/CreateCoupon";

const RouterProvider = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/create-coupon" element={<CreateCoupon />} />
    </Routes>
  );
};

export default RouterProvider;
