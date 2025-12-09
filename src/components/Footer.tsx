import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo-light-mode.png";
import Copyrights from "./Copyrights";

const Footer = () => {
  return (
    <>
      <footer className="flex-column border-t border-b border-gray-400 py-4 text-center">
        {/* Left Side */}
        <div className="flex-column basis-1/2">
          {/* Logo & motto */}
          <div className="space-y-1.5">
            <img
              src={Logo}
              alt="RuangToko Logo"
              width={160}
              height={80}
              className="mx-auto"
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
              <li className="text-sm">About Us</li>
              <li className="text-sm">Careers</li>
              <li className="text-sm">Press</li>
            </ul>
          </div>
          {/* ./ About */}
        </div>
        {/* ./ Left Side */}

        {/* Right Side */}
        <div className="flex-column basis-1/2">
          {/* Customer Support */}
          <div className="space-y-2">
            <h2 className="font-semibold text-black">Customer Support</h2>
            <ul className="space-y-1.5">
              <li className="text-sm">Contact Us</li>
              <li className="text-sm">FAQs</li>
              <li className="text-sm">Shipping & Returns</li>
            </ul>
          </div>
          {/* ./ Customer Support */}

          {/* Social Media */}
          <div className="space-y-4">
            <h2 className="font-semibold text-black">Follow Us</h2>
            <div className="flex gap-4">
              <FaFacebook className="size-6" />
              <FaInstagram className="size-6" />
              <FaTiktok className="size-6" />
              <FaYoutube className="size-6" />
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
