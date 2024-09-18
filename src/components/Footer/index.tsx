import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-3 bg-dark text-white text-center">
      <div className="container">
        <p className="mb-0">© 2024 Student Portal. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/about" className="text-white text-decoration-none">About Us</a>
          </li>
          <li className="list-inline-item">
            <a href="/contact" className="text-white text-decoration-none">Contact</a>
          </li>
          <li className="list-inline-item">
            <a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="/privacy" className="text-white text-decoration-none">Login</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
