import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark" style={{ backgroundColor: '#000000' }}>
      <div className="container">
        {/* Brand Name with Icon and Enhanced Design */}
        <NavLink 
          className="navbar-brand d-flex align-items-center" 
          to="/" 
          style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#ffffff', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Shadow for depth
            transition: 'color 0.3s ease' // Smooth transition on hover
          }}
        >
          <i 
            className="bi bi-shop" 
            style={{ 
              fontSize: '30px', 
              marginRight: '10px', 
              color: '#ff6600', 
              transition: 'transform 0.3s ease' // Animation on hover
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // Scale up on hover
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset on leave
          ></i> 
          <span style={{ 
            color: '#ffffff', // Changed to white
            transition: 'color 0.3s ease' // Smooth transition on hover
          }}>
            𝕊𝕙𝕠𝕡 ℕ𝕖𝕡𝕒𝕝
          </span> 
        </NavLink>

        {/* Optional Animation Background */}
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.1), rgba(255, 165, 0, 0.1))', // Soft gradient
            animation: 'pulse 2s infinite ease-in-out', 
            zIndex: -1, // Ensure background stays behind the text
            borderRadius: '10px', // Rounded corners
          }} 
        />

        {/* Toggler for mobile view */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home Link */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/"
                style={{ color: '#ffffff' }} // Link color set to white
              >
                Home
              </NavLink>
            </li>

            {/* About Link */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/about"
                style={{ color: '#ffffff' }} // Link color set to white
              >
                About
              </NavLink>
            </li>

            {/* Contact Link */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/contact"
                style={{ color: '#ffffff' }} // Link color set to white
              >
                Contact
              </NavLink>
            </li>

            {/* Product Link */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/product"
                style={{ color: '#ffffff' }} // Link color set to white
              >
                Product
              </NavLink>
            </li>

            {/* Login Link */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/login"
                style={{ color: '#ffffff' }} // Link color set to white
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
