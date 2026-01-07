import { FiShoppingCart } from "react-icons/fi";
import Logo from "../assets/logo-light-mode.png";
import programmer from "../assets/tired-programmer.svg";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleUserIconClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      {/* Desktop NavBar */}
      <nav className="font-poppins flex items-center justify-between border-b border-gray-400/40 p-2 pr-3 md:p-4 lg:px-24">
        {/* Logo + NavItem */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div>
            <img
              src={Logo}
              alt="RuangToko Logo"
              width={160}
              height={80}
              className="cursor-pointer"
            />
          </div>
          {/* ./ Logo */}

          {/* Desktop NavItem */}
          <div className="mt-1.5 hidden md:block">
            <ul className="flex items-center justify-evenly gap-8">
              <li className="hover:text-secondary font-medium">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-secondary font-medium">
                <Link to="/products">Products</Link>
              </li>
              <li className="hover:text-secondary font-medium">
                <Link to="/order">Order History</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* ./ Desktop NavItem */}

        {/* Mobile - NavItem | Bottom Section */}
        <div className="relative md:hidden">
          <ul className="bg-primary fixed right-1/2 bottom-0 flex w-full translate-x-1/2 items-center justify-evenly gap-4 border-t border-gray-400/40 py-4 font-medium text-white md:border-0 md:border-none">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/order">Order History</Link>
            </li>
          </ul>
        </div>
        {/* ./ Mobile - NavItem | Bottom Section */}

        {/* Logo + NavItem */}

        {/* Icon Cart & Icon User */}
        <div className="mt-1.5 flex items-center gap-4 md:gap-8">
          <div className="relative p-2.5">
            <Link to="/cart">
              <FiShoppingCart className="size-6 md:size-7" />
            </Link>
            <div className="bg-primary absolute top-0.5 -right-1 flex size-5 items-center justify-center rounded-full md:top-0 md:-right-2 md:size-6">
              <span className="text-xs font-bold text-white md:text-sm">3</span>
            </div>
          </div>
          <FaRegUser
            className="size-6 cursor-pointer md:size-7"
            onClick={handleUserIconClick}
          />
        </div>
        {/* ./ Icon Cart & Icon User */}
      </nav>
      {/* Desktop NavBar */}

      {/* modal box for account page */}
      {isClick && (
        <div className="fixed inset-0 z-40 bg-black/60">
          <div className="absolute top-24 left-1/2 flex w-4/5 max-w-sm -translate-x-1/2 flex-col items-center justify-center gap-3 rounded-lg bg-white p-4 text-center shadow-md md:top-1/6 md:w-2/5">
            <img
              src={programmer}
              alt="tired programmer illustration"
              className="w-3/4"
            />
            <div className="space-y-3">
              <h2 className="font-poppins text-lg font-medium underline">
                Feature Not Available
              </h2>
              <p className="text-sm text-gray-600">
                User accounts are not supported at the moment. Please check back
                later for updates.
              </p>
              <button
                className="bg-primary w-full cursor-pointer rounded-lg py-2 text-center text-white hover:bg-blue-700"
                onClick={handleUserIconClick}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ./ modal box for account page */}
    </>
  );
};

export default NavBar;
