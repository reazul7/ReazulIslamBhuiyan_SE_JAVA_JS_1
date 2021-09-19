import React from "react";
import NavBar from "../Shared/NavBar";
import banner from "../../images/banner.png";
import SubscriptionPlans from "./SubscriptionPlans";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <img src={banner} className="w-full" alt="" />
      <SubscriptionPlans />
      <Footer />
    </div>
  );
};

export default Home;
