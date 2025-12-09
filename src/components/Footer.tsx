import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo-light-mode.png";
import Copyrights from "./Copyrights";

const Footer = () => {
  return (
    <>
      <footer className="flex-column border-t border-b border-gray-400/40 py-4 text-center lg:flex-row lg:px-24 lg:py-8 lg:text-start xl:gap-20">
        {/* Left Side */}
        <div className="flex-column lg:basis-1/2 lg:flex-row lg:items-start lg:gap-4">
          {/* Logo & motto */}
          <div className="space-y-1.5 lg:basis-3/4">
            <img
              src={Logo}
              alt="RuangToko Logo"
              width={160}
              height={80}
              className="mx-auto cursor-pointer lg:mx-0"
            />
            <p className="font-poppins text-sm font-medium text-gray-500">
              Your one-stop shop for everything you need.
            </p>
          </div>
          {/* ./ Logo & motto */}

          {/* About */}
          <div className="space-y-2">
            <h2 className="font-semibold text-black">About</h2>
            <ul className="space-y-1.5">
              <li className="hover:text-secondary text-sm">
                <a href="#">About Us</a>
              </li>
              <li className="hover:text-secondary text-sm">
                <a href="#">Careers</a>
              </li>
              <li className="hover:text-secondary text-sm">
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
          {/* ./ About */}
        </div>
        {/* ./ Left Side */}

        {/* Right Side */}
        <div className="flex-column lg:flex-row lg:items-start lg:gap-16 xl:gap-32">
          {/* Customer Support */}
          <div className="space-y-2">
            <h2 className="font-semibold text-black">Customer Support</h2>
            <ul className="space-y-1.5">
              <li className="hover:text-secondary text-sm">
                <a href="#">Contact Us</a>
              </li>
              <li className="hover:text-secondary text-sm">
                <a href="#">FAQs</a>
              </li>
              <li className="hover:text-secondary text-sm">
                <a href="#">Shipping & Returns</a>
              </li>
            </ul>
          </div>
          {/* ./ Customer Support */}

          {/* Social Media */}
          <div className="space-y-4">
            <h2 className="font-semibold text-black">Follow Us</h2>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook className="size-6 duration-200 hover:text-blue-500" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram className="size-6 duration-200 hover:text-pink-500" />
              </a>
              <a href="https://www.tiktok.com/en/" target="_blank">
                <FaTiktok className="size-6 duration-200 hover:text-pink-500" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube className="size-6 duration-200 hover:text-red-500" />
              </a>
            </div>
          </div>
          {/* ./ Social Media */}
        </div>
        {/* ./ Right Side */}
      </footer>
      <Copyrights />
    </>
  );
};

export default Footer;
