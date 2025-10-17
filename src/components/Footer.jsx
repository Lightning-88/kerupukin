import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="email-container">
          <p>support@kerupukin.com</p>
        </div>
        <div className="media-container">
          <Link to="/">
            <FaFacebook />
          </Link>
          <Link to="/">
            <FaInstagram />
          </Link>
          <Link to="/">
            <FaTiktok />
          </Link>
          <Link to="/">
            <FaTwitter />
          </Link>
        </div>
        <div className="copyright-text">
          <p>
            © 2025 PT. Kerupuk Bahagia Bersama
            <br />
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
