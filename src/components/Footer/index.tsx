import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-3 text-light text-center" style={{ backgroundColor: "#e1e1e1" }}>
      <div className="container">
        <p className="mb-2" style={{ color: '#000000' }}>© 2024 Your Shop Nepal | All rights reserved</p>
        <ul className="list-inline mb-2">
          <li className="list-inline-item">
            <a href="/about" className="text-decoration-none" style={{ color: '#000000' }}>About Us</a>
          </li>
          <li className="list-inline-item">
            <a href="/contact" className="text-decoration-none" style={{ color: '#000000' }}>Contact Us</a>
          </li>
          <li className="list-inline-item">
            <a href="/privacy" className="text-decoration-none" style={{ color: '#000000' }}>Privacy Policy</a>
          </li>
        </ul>
        <p className="small mb-0" style={{ color: '#000000' }}>
          Follow us on:
        </p>

        <div className="d-flex justify-content-center mb-2">
          <a href="https://www.facebook.com/bt9824537556" className="text-white me-3" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook" style={{ color: "#3b5998", transition: "transform 0.3s" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.2)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}></i>
          </a>
          <a href="https://www.instagram.com/bipinthapa88" className="text-white me-3" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram" style={{ color: "#E4405F", transition: "transform 0.3s" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.2)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}></i>
          </a>
          <a href="https://www.linkedin.com/in/birendracode/" className="text-white me-3" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" style={{ color: "#0077B5", transition: "transform 0.3s" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.2)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}></i>
          </a>
          <a href="https://twitter.com/yourprofile" className="text-white" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter" style={{ color: "#1DA1F2", transition: "transform 0.3s" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.2)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
