import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavMobile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop NavBar */}
      <nav className="font-poppins flex items-center justify-between border-b border-gray-400/40 p-2 pr-3 md:p-4 lg:px-24">
        {/* Logo + NavItem */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div>
            <Link
              to={"/"}
              className="text-primary cursor-pointer text-2xl font-bold lg:text-3xl"
            >
              RuangToko
            </Link>
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
          <RiMenu3Line onClick={handleNavMobile} className="size-6" />

          {/* navbar menu */}
          {isOpen && (
            <div className="fixed inset-0 z-10 flex h-screen w-full items-center justify-center bg-black/40 backdrop-blur-sm">
              <IoClose
                onClick={handleNavMobile}
                className="absolute top-4 right-4 size-8 text-black"
              />
              <ul className="flex flex-col items-center justify-center gap-6 text-lg font-medium text-black">
                <li className="tracking-widest">
                  <Link to="/" onClick={handleNavMobile}>
                    Home
                  </Link>
                </li>
                <li className="tracking-widest">
                  <Link to="/products" onClick={handleNavMobile}>
                    Products
                  </Link>
                </li>
                <li className="tracking-widest">
                  <Link to="/order" onClick={handleNavMobile}>
                    Order History
                  </Link>
                </li>
                <li className="relative">
                  <Link to="/cart" onClick={handleNavMobile}>
                    <FiShoppingCart className="size-6 md:size-7" />
                  </Link>
                  <div className="bg-primary absolute -top-3 -right-4 flex size-6 items-center justify-center rounded-full">
                    <span className="text-sm font-bold text-white md:text-sm">
                      3
                    </span>
                  </div>
                </li>
                <li>
                  <Link to={"/account"} onClick={handleNavMobile}>
                    <FaRegUser className="size-6 cursor-pointer md:size-7" />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* ./ navbar menu */}
        {/* ./ Mobile - NavItem | Bottom Section */}

        {/* Logo + NavItem */}

        {/* Icon Cart & Icon User for desktop */}
        <div className="mt-1.5 hidden items-center gap-4 md:flex md:gap-8">
          <div className="relative p-2.5">
            <Link to="/cart">
              <FiShoppingCart className="size-6 md:size-7" />
            </Link>
            <div className="bg-primary absolute top-0.5 -right-1 flex size-5 items-center justify-center rounded-full md:top-0 md:-right-2 md:size-6">
              <span className="text-xs font-bold text-white md:text-sm">3</span>
            </div>
          </div>
          <Link to={"/account"}>
            <FaRegUser className="size-6 cursor-pointer md:size-7" />
          </Link>
        </div>
        {/* ./ Icon Cart & Icon User for desktop */}
      </nav>
      {/* Desktop NavBar */}
    </>
  );
};

export default NavBar;
