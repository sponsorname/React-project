import { useState, useEffect } from "react";
import Container from "#components/Container";
import ProductInterface from "#interfaces/ProductInferface";
import { useNavigate } from "react-router-dom";


function Product() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <div className="container">
        {loading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh" }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger text-center my-3" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <h2>Product List</h2>
            <p className="text-muted">
              Below is the list of products fetched from the API. Browse through
              the selection and check out the details.
            </p>
            <hr />
            <div className="row">
              {products.map((product) => (
                <div className="col-md-4 mb-4" key={product.id}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="card-img-top"
                      style={{ maxHeight: "200px", objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" onClick={() => navigate(`/product/${product.id}`)}>{product.title.slice(0,20)}..</h5>
                      <p className="card-text text-muted">
                        <small>{product.category}</small>
                      </p>
                      <p className="card-text">
                        {product.description.slice(0, 80)}...
                      </p>
                      <p className="card-text">
                        <strong>Price: ${product.price.toFixed(2)}</strong>
                      </p>
                      <p className="card-text">
                        <small>
                          Rating: {product.rating.rate} ({product.rating.count}{" "}
                          reviews)
                        </small>
                      </p>

                      <button
                        className="btn btn-primary w-100"
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        Show More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Container>
  );
}

export default Product;
