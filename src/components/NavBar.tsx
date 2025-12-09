import { FiShoppingCart } from "react-icons/fi";
import Logo from "../assets/logo-light-mode.png";
import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
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
              <li className="hover:text-secondary">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-secondary">
                <a href="#">Products</a>
              </li>
              <li className="hover:text-secondary">
                <a href="#">Order History</a>
              </li>
            </ul>
          </div>
        </div>
        {/* ./ Desktop NavItem */}

        {/* Mobile - NavItem | Bottom Section */}
        <div className="relative md:hidden">
          <ul className="fixed right-1/2 bottom-0 flex w-full translate-x-1/2 items-center justify-evenly gap-4 border-t border-gray-400/40 py-4 md:border-0 md:border-none">
            <li>Home</li>
            <li>Products</li>
            <li>Order History</li>
          </ul>
        </div>
        {/* ./ Mobile - NavItem | Bottom Section */}

        {/* Logo + NavItem */}

        {/* Icon Cart & Icon User */}
        <div className="mt-1.5 flex items-center gap-4 md:gap-8">
          <div className="relative p-2.5">
            <a href="#">
              <FiShoppingCart className="size-6 md:size-7" />
            </a>
            <div className="bg-primary absolute top-0.5 -right-1 flex size-5 items-center justify-center rounded-full md:top-0 md:-right-2 md:size-6">
              <span className="text-xs font-bold text-white md:text-sm">3</span>
            </div>
          </div>
          <FaRegUser className="size-6 cursor-pointer md:size-7" />
        </div>
        {/* ./ Icon Cart & Icon User */}
      </nav>
      {/* Desktop NavBar */}
    </>
  );
};

export default NavBar;
