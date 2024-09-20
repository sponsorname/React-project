import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "#components/Container";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch products from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Filter products based on search term
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <Container>
      {/* Hero Section */}
      <div
        className="hero-section text-light text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "100vh",
          background: "linear-gradient(to right, #ac8e63, #976d2b)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        ></div>
        <div
          style={{
            zIndex: 1,
            textAlign: "center",
            padding: "20px",
            maxWidth: "800px",
          }}
        >
          <h1 className="display-4">Welcome to Our Shop</h1>
          <p className="lead">Find amazing deals and shop your favorite products</p>

          {/* Search Bar */}
          <div
            className="search-bar-container my-4"
            style={{
              position: "relative",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
              style={{
                width: "100%",
                borderRadius: "25px",
                border: "1px solid #adb5bd",
                backgroundColor: "#f8f9fa",
                padding: "12px 45px 12px 20px",
                fontSize: "14px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
            <i
              className="bi bi-search"
              style={{
                position: "absolute",
                top: "50%",
                right: "15px",
                transform: "translateY(-50%)",
                color: "#6c757d",
                fontSize: "20px",
                cursor: "pointer",
              }}
            ></i>

            {/* Display Filtered Results only if searchTerm is not empty */}
            {searchTerm && filteredProducts.length > 0 && (
              <ul
                className="list-group position-absolute w-100"
                style={{
                  top: "110%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                {filteredProducts.map((product) => (
                  <li
                    key={product.id}
                    className="list-group-item"
                    style={{ cursor: "pointer" }}
                  >
                    <Link
                      to={`/product/${product.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to="/product"
            className="btn btn-lg mt-3"
            style={{
              backgroundColor: "#ff6600",
              color: "white",
              borderRadius: "30px",
              padding: "10px 30px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e65c00";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ff6600";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row text-center">
          {/* Feature cards */}
        </div>
      </div>
    </Container>
  );
};

export default Home;
