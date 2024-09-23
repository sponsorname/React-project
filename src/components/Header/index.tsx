import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark" style={{ backgroundColor: '#1818D9' }}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Updated to align "Shop Nepal" on the left */}
        <NavLink 
          className="navbar-brand d-flex align-items-center me-auto" 
          to="/" 
          style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
          }}
        >
          <i 
            className="bi bi-shop" 
            style={{ 
              fontSize: '30px', 
              marginRight: '10px', 
              color: '#ff6600', 
              transition: 'transform 0.3s ease' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          ></i> 
          <span style={{ color: '#ffffff', transition: 'color 0.3s ease' }}>
            𝕊𝕙𝕠𝕡 ℕ𝕖𝕡𝕒𝕝
          </span> 
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/"
                style={{ color: '#ffffff' }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/about"
                style={{ color: '#ffffff' }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/contact"
                style={{ color: '#ffffff' }}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/product"
                style={{ color: '#ffffff' }}
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/login"
                style={{ color: '#ffffff' }}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/cart"
                style={{ color: '#ffffff' }}
              >
                <i 
                  className="bi bi-cart" 
                  style={{ 
                    fontSize: '24px', 
                    transition: 'transform 0.3s ease, color 0.3s ease' 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                    e.currentTarget.style.color = '#ff6600';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                ></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/profile"
                style={{ color: '#ffffff' }}
              >
                <i className="bi bi-person-circle" style={{ fontSize: '24px' }}></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
