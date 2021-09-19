import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer class="bg-green-900 pt-10 sm:mt-10 pt-10">
      <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* Getting Started Area */}
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
            Getting Started
          </div>

          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Installation
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Release Notes
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Upgrade Guide
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Using with Preprocessors
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Optimizing for Production
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Browser Support
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            IntelliSense
          </Link>
        </div>

        {/* Core Concepts Area */}
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
            Core Concepts
          </div>

          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Utility-First
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Responsive Design
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Hover, Focus, & Other States
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Dark Mode
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Adding Base Styles
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Extracting Components
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Adding New Utilities
          </Link>
        </div>

        {/* Customization Area */}
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
            Customization
          </div>

          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Configuration
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Theme Configuration
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Breakpoints
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Customizing Colors
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Customizing Spacing
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Configuring Variants
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Plugins
          </Link>
        </div>

        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
            Community
          </div>

          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            GitHub
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Discord
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Twitter
          </Link>
          <Link
            to="/"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            YouTube
          </Link>
        </div>
      </div>

      <div class="pt-2">
        <div
          class="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl"
        >
          <div class="mt-2 text-center">&copy; Copyright {(new Date()).getFullYear()} year. All Rights Reserved by <a className="font-bold text-white pointer" href="https://www.linkedin.com/in/reazul7/">Reazul Islam Bhuiyan</a> </div>

          <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex mx-auto">
            <Link to="/" class="w-6 mx-1"><FaFacebook /></Link>
            <Link to="/" class="w-6 mx-1"><FaTwitter /></Link>
            <Link to="/" class="w-6 mx-1"><FaYoutube /></Link>
            <Link to="/" class="w-6 mx-1"><FaLinkedin/></Link>
            <Link to="/" class="w-6 mx-1"><FaInstagram/></Link>
          </div >
        </div>
      </div>
    </footer>
  );
};

export default Footer;
