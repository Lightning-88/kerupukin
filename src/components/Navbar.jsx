import { useState } from "react";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="brand-name">
        <a href="/">
          <p>
            Kerupuk<span>in</span>
          </p>
        </a>
      </div>
      <div className={`menu-navbar ${isOpen ? "on" : ""}`}>
        <div className="close-button">
          <button onClick={openClose}>
            <X />
          </button>
        </div>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/reseller">Reseller</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="menu-button-mobile">
        <button onClick={openClose}>
          <Menu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
