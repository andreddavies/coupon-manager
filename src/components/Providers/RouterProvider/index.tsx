import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "../../../pages/NotFound";
import Dashboard from "../../../pages/Dashboard";
import Login from "../../../pages/Authentication/Login";
import Register from "../../../pages/Authentication/Register";
import CreateCoupon from "../../../pages/Dashboard/CreateCoupon";

const RouterProvider = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/create-coupon" element={<CreateCoupon />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterProvider;
