import { FaRegUser } from "react-icons/fa";
import Logo from "../assets/logo-light-mode.png";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
  return (
    <>
      {/* Desktop NavBar */}
      <nav className="flex items-center justify-between border-b border-gray-400 p-2 pr-3 md:p-4 lg:px-24">
        {/* Logo + NavItem */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div>
            <img src={Logo} alt="RuangToko Logo" width={160} height={80} />
          </div>
          {/* ./ Logo */}

          {/* Desktop NavItem */}
          <div className="mt-1.5 hidden md:block">
            <ul className="flex items-center justify-evenly gap-4">
              <li className="hover:text-primary">Home</li>
              <li className="hover:text-primary">Products</li>
              <li className="hover:text-primary">Order History</li>
            </ul>
          </div>
        </div>
        {/* ./ Desktop NavItem */}

        {/* Mobile - NavItem | Bottom Section */}
        <div className="relative md:hidden">
          <ul className="fixed right-1/2 bottom-0 flex w-full translate-x-1/2 items-center justify-evenly gap-4 py-4">
            <li>Home</li>
            <li>Products</li>
            <li>Order History</li>
          </ul>
        </div>
        {/* ./ Mobile - NavItem | Bottom Section */}

        {/* Logo + NavItem */}

        {/* Login/User Icon & Cart Icon */}
        <div className="mt-1.5 flex items-center gap-1.5 md:gap-4">
          <FaRegUser className="size-5 md:size-6" />
          <div className="relative p-2.5">
            <FiShoppingCart className="size-5 md:size-6" />
            <div className="bg-primary absolute top-0.5 -right-1 flex size-5 items-center justify-center rounded-full md:top-0 md:-right-2 md:size-6">
              <span className="text-xs font-bold text-white md:text-sm">3</span>
            </div>
          </div>
        </div>
        {/* ./ Login/User Icon & Cart Icon */}
      </nav>
      {/* Desktop NavBar */}
    </>
  );
};

export default NavBar;
