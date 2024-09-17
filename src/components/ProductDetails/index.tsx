import { useState, useEffect } from "react";
import Container from "#components/Container";
import ProductInterface from "#interfaces/ProductInferface";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((json) => {
        setProduct(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <Container>
      <div className="container my-5">
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

        {!loading && !error && product && (
          <>
            <div className="row my-4">
              <div className="col-md-6 mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid shadow-sm rounded"
                  style={{ maxHeight: "400px", objectFit: "contain" }}
                />
              </div>
              <div className="col-md-6">
                <div className="card p-4 shadow-sm">
                  <h2 className="mb-4">{product.title}</h2>
                  <p className="text-muted mb-3">{product.category}</p>
                  <p className="mb-3">{product.description}</p>
                  <p className="mb-3">
                    <strong>Price: ${product.price.toFixed(2)}</strong>
                  </p>
                  <p className="mb-3">
                    <strong>Rating:</strong> {product.rating.rate} / 5 (
                    {product.rating.count} reviews)
                  </p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => navigate(-1)}
                  >
                    Back to Products
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}

export default ProductDetails;
