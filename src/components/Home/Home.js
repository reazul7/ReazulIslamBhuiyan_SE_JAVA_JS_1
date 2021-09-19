import React from "react";
import NavBar from "../Shared/NavBar";
import banner from "../../images/banner.png";
import SubscriptionPlans from "./SubscriptionPlans";

const Home = () => {
  return (
    <div>
      <NavBar />
      <img src={banner} className="w-full" alt="" />
      <SubscriptionPlans />
    </div>
  );
};

export default Home;
