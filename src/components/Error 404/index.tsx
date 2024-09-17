import React from "react";
import Container from "#components/Container";
import { Link } from "react-router-dom";

const Page_not_found: React.FC = () => {
  return (
    <Container>
      <div className="container text-center" style={{ marginTop: "100px" }}>
        <h1 className="display-4">Oops! Page Not Found</h1>
        <h4 className="text-muted">404 Error</h4>
        <p className="lead">
          The page you're looking for doesn't exist. It may have been removed, or the link might be broken.
        </p>
        {/* Button to return to home */}
        <Link to="/" className="btn btn-primary mt-4">
          Go Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default Page_not_found;
