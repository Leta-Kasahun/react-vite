import React from 'react';
import { FaApple, FaSearch, FaShoppingBag } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <FaApple size={28} />
        </a>
        <div className="nav-links">
          <a href="#"><span>Store</span></a>
          <a href="#"><span>Mac</span></a>
          <a href="#"><span>iPad</span></a>
          <a href="#"><span>iPhone</span></a>
          <a href="#"><span>Watch</span></a>
          <a href="#"><span>AirPods</span></a>
        </div>
        <div className="nav-icons">
          <button className="search-btn"><FaSearch size={16} /></button>
          <button className="cart-btn"><FaShoppingBag size={16} /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;