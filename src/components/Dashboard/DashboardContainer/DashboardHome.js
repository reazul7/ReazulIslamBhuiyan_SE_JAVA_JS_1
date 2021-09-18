import React from "react";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CardTravelIcon from "@material-ui/icons/CardTravel";

const DashboardHome = () => {
  return (
    <div>
      {/* top details information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 text-blue-800">
            <MonetizationOnIcon />
          </div>
          <div className="text-center">
            <p className="text-xl">Revenue</p>
            <p className="text-lg font-bold">$13,456.5 </p>
            <small>Shipping fees are not included</small>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 text-blue-800">
            <LocalShippingIcon />
          </div>
          <div className="text-center">
            <p className="text-xl">Orders</p>
            <p className="text-lg font-bold">53.668</p>
            <small>Excluding orders in transit</small>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 text-blue-800">
            <CardTravelIcon />
          </div>
          <div className="text-center">
            <p className="text-xl">Products</p>
            <p className="text-lg font-bold">9.856</p>
            <small>In 19 Categories</small>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 text-blue-800">
            <ShoppingBasketIcon />
          </div>
          <div className="text-center">
            <p className="text-xl">Monthly Earning</p>
            <p className="text-lg font-bold">$6,982</p>
            <small>Based in your local time.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
