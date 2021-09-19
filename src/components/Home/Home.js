import React from "react";
import NavBar from "./NavBar";
import banner from "../../images/banner.png";

const Home = () => {
  return (
    <div>
      <NavBar />
      <img src={banner} className="w-full" alt="" />
    </div>
  );
};

export default Home;
