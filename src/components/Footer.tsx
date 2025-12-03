import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo-light-mode.png";

const Footer = () => {
  return (
    <footer className="">
      {/* Left Side */}
      <div className="">
        {/* Logo & motto */}
        <div className="">
          <img
            src={Logo}
            alt="RuangToko Logo"
            width={160}
            height={80}
            className=""
          />
          <p>Your one-stop shop for everything you need.</p>
        </div>
        {/* ./ Logo & motto */}

        {/* About */}
        <div className="">
          <h2 className="">About</h2>
          <ul>
            <li className="">About Us</li>
            <li className="">Careers</li>
            <li className="">Press</li>
          </ul>
        </div>
        {/* ./ About */}
      </div>
      {/* ./ Left Side */}

      {/* Right Side */}
      <div className="">
        {/* Customer Support */}
        <div className="">
          <h2 className="">Customer Support</h2>
          <ul>
            <li className="">Contact Us</li>
            <li className="">FAQs</li>
            <li className="">Shipping & Returns</li>
          </ul>
        </div>
        {/* ./ Customer Support */}

        {/* Social Media */}
        <div className="">
          <h2 className="">Follow Us</h2>
          <div className="">
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>
        {/* ./ Social Media */}
      </div>
      {/* ./ Right Side */}
    </footer>
  );
};

export default Footer;
