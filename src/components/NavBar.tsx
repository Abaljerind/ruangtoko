import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
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
              className="cursor-pointer text-2xl font-bold text-sky-500 lg:text-3xl"
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
          <Link to={"/account"}>
            <FaRegUser className="size-6 cursor-pointer md:size-7" />
          </Link>
        </div>
        {/* ./ Icon Cart & Icon User */}
      </nav>
      {/* Desktop NavBar */}
    </>
  );
};

export default NavBar;
