import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-3 bg-dark text-light text-center">
      <div className="container">
        <p className="mb-2">© 2024 Your Shop Nepal | All rights reserved</p>
        <ul className="list-inline mb-2">
          <li className="list-inline-item">
            <a href="/about" className="text-white text-decoration-none">About Us</a>
          </li>
          <li className="list-inline-item">
            <a href="/contact" className="text-white text-decoration-none">Contact Us</a>
          </li>
          <li className="list-inline-item">
            <a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a>
          </li>
        </ul>
        <p className="small mb-0">
          Follow us on:
        </p>
        <div className="d-flex justify-content-center mb-2">
          <a href="https://www.facebook.com/bt9824537556" className="text-white me-3" aria-label="Facebook" target="_blank">
            <i className="bi bi-facebook"></i> {/* Facebook icon */}
          </a>
          <a href="https://www.instagram.com/bipinthapa88" className="text-white me-3" aria-label="Instagram" target="_blank">
            <i className="bi bi-instagram"></i> {/* Instagram icon */}
          </a>
          <a href="https://www.linkedin.com/in/birendracode/" className="text-white me-3" aria-label="LinkedIn" target="_blank">
            <i className="bi bi-linkedin"></i> {/* LinkedIn icon */}
          </a>
          <a href="https://twitter.com/yourprofile" className="text-white" aria-label="Twitter" target="_blank">
            <i className="bi bi-twitter"></i> {/* Twitter icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
