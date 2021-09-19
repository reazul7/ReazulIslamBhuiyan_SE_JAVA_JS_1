import React, { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { useHistory } from "react-router";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);

  let history = useHistory();  

  const handleSignOut = () => {
    setLoggedInUser({});
    history.push("/");
  }

  return (
    <nav className="bg-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-8 w-8"
                  src="https://www.sweetitech.co.uk/assets/images/Round-logo.png"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/">
                  {" "}
                  <button className="text-gray-900 font-semibold hover:bg-green-800  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </button>{" "}
                </Link>
                <Link to="/about-us">
                  {" "}
                  <button className="text-gray-900 font-semibold hover:bg-green-800  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About US
                  </button>{" "}
                </Link>
                <Link to="/dashboard">
                  {" "}
                  <button className="text-gray-900 font-semibold hover:bg-green-800  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </button>{" "}
                </Link>
                {loggedInUser.email ? (
                  <Link to="">
                  {" "}
                  <button onClick={handleSignOut} className="text-gray-900 font-semibold hover:bg-green-800  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Logout
                  </button>{" "}
                </Link>
                ) : (
                  <Link to="/login">
                  {" "}
                  <button className="text-gray-900 font-semibold hover:bg-green-800  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Login
                  </button>{" "}
                </Link>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-green-600 inline-flex items-center justify-center p-2 rounded-md text-green-900 hover:text-green-800 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-green-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/">
                {" "}
                <button className="hover:text-white hover:bg-gray-200 hover:text-gray-800  text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </button>{" "}
              </Link>
              <Link to="/about-us">
                {" "}
                <button className="hover:text-white hover:bg-gray-200 hover:text-gray-800  text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  About US
                </button>{" "}
              </Link>
              <Link to="/dashboard">
                {" "}
                <button className="hover:text-white hover:bg-gray-200 hover:text-gray-800  text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  Dashboard
                </button>{" "}
              </Link>
              {loggedInUser.email ? (
                <Link to="">
                {" "}
                <button className="hover:text-white hover:bg-gray-200 hover:text-gray-800  text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  Logout
                </button>{" "}
              </Link>
              ) : (
                <Link to="/login">
                {" "}
                <button className="hover:text-white hover:bg-gray-200 hover:text-gray-800  text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  Login
                </button>{" "}
              </Link>
              )}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default NavBar;
