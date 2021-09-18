import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddProduct from "./AddProduct";
import AllProducts from "./AllProducts";
import Orders from "./Orders";

const UserDashboardRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path + "/add-product"} render={() => <AddProduct />} />
      <Route path={path + "/all-products"} render={() => <AllProducts />} />
      <Route path={path + "/orders"} render={() => <Orders />} />
    </Switch>
  );
};

export default UserDashboardRoute;
