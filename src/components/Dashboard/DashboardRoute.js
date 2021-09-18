import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import DashboardHome from "./DashboardContainer/DashboardHome";
import AllProducts from "./DashboardContainer/AllProducts";
import AddProduct from "./DashboardContainer/AddProduct";
import UpdateProduct from "./DashboardContainer/UpdateProduct";

const UserDashboardRoute = () => {
  return (
    <Switch>
      <Route path={"/dashboard/dashboard"} render={() => <DashboardHome />} />
      <Route path={"/dashboard/all-products"} render={() => <AllProducts />} />
      <Route path={`/dashboard/add-product`} render={() => <AddProduct />} />
      <Route path={`/dashboard/update-product`} render={() => <UpdateProduct />} />
    </Switch>
  );
};

export default UserDashboardRoute;
