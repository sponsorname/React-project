import React from "react";
import { Link } from "react-router-dom";
import Container from "#components/Container";

const Home: React.FC = () => {
  return (
    <Container>
      {/* Hero Section */}
      <div
        className="hero-section text-light text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          height: '100vh', // Full height of the viewport
          background: 'linear-gradient(to right, #ac8e63, #976d2b)', // Coffee gradient
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)' // Slight dark overlay
          }}
        ></div>
        <div
          style={{
            zIndex: 1,
            textAlign: 'center',
            padding: '20px',
            maxWidth: '800px', // Ensuring content doesn't get too wide
          }}
        >
          <h1 className="display-4">Welcome to Our Shop</h1>
          <p className="lead">Find amazing deals and shop your favorite products</p>
{/* Search Bar */}
<div className="search-bar-container my-4" style={{ position: 'relative', maxWidth: '400px', margin: '0 auto' }}>
  <input
    type="text"
    className="form-control form-control-sm"
    placeholder="Search for products..."
    style={{
      width: '100%',
      borderRadius: '25px',
      border: '1px solid #adb5bd',
      backgroundColor: '#f8f9fa',
      padding: '12px 45px 12px 20px', // Adjusted padding for more space around text
      fontSize: '14px',
      transition: 'all 0.3s ease', // Smooth transition for hover effect
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    }}
    onFocus={(e) => (e.target.style.border = '1px solid #ff6600')} // Change border on focus
    onBlur={(e) => (e.target.style.border = '1px solid #adb5bd')} // Restore on blur
  />
  {/* Search Icon */}
  <i
    className="bi bi-search"
    style={{
      position: 'absolute',
      top: '50%',
      right: '15px',
      transform: 'translateY(-50%)',
      color: '#6c757d',
      fontSize: '20px', // Slightly larger icon
      cursor: 'pointer',
    }}
  ></i>

  {/* Animated Background (Optional) */}
  <div
    className="search-animation"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '25px',
      background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.1), rgba(255, 165, 0, 0.1))', // Soft gradient
      animation: 'pulse 2s infinite ease-in-out',
    }}
  ></div>
</div>

{/* CSS for pulsating animation */}
<style>
  {`
    @keyframes pulse {
      0% {
        opacity: 0.7;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.7;
      }
    }
  `}
</style>


          <Link 
  to="/products" 
  className="btn btn-lg mt-3"
  style={{
    backgroundColor: '#ff6600', // Custom background color
    color: 'white', // Button text color
    borderRadius: '30px', // Rounded corners
    padding: '10px 30px', // Padding for better size
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
    transition: 'all 0.3s ease-in-out' // Smooth transition for hover effects
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#e65c00'; // Darker on hover
    e.currentTarget.style.transform = 'scale(1.05)'; // Slightly bigger on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#ff6600'; // Return to normal color
    e.currentTarget.style.transform = 'scale(1)'; // Return to normal size
  }}
>
  Shop Now
</Link>

        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ backgroundColor: '#e3f2fd' }} // Light blue background
            >
              <div className="card-body d-flex flex-column">
                <i className="bi bi-cart-fill display-3 text-primary"></i>
                <h5 className="card-title mt-3 text-primary">Products</h5>
                <p className="card-text text-muted">Browse our extensive product range.</p>
                <Link to="/product" className="btn btn-primary mt-auto">
                  View Products
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ backgroundColor: '#e8f5e9' }} // Light green background
            >
              <div className="card-body d-flex flex-column">
                <i className="bi bi-tags-fill display-3 text-success"></i>
                <h5 className="card-title mt-3 text-success">Deals</h5>
                <p className="card-text text-muted">Discover our latest discounts and special offers.</p>
                <Link to="#" className="btn btn-success mt-auto">
                  Explore Deals
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ backgroundColor: '#fff8e1' }} // Light yellow background
            >
              <div className="card-body d-flex flex-column">
                <i className="bi bi-info-circle-fill display-3 text-warning"></i>
                <h5 className="card-title mt-3 text-warning">About Us</h5>
                <p className="card-text text-muted">Learn more about our story and values.</p>
                <Link to="/about" className="btn btn-warning mt-auto">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
