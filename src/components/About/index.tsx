
import Container from "#components/Container";
import AboutImage from "src/assets/Image/about.png"; // Replace with your own image

function About() {
  return (
    <Container>
      <div className="container my-5">
        {/* Hero Section with Image and Title */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h1 className="display-4 font-weight-bold text-primary">
              About Shop Nepal
            </h1>
            <p className="lead mt-4">
              At Shop Nepal, our mission is to empower businesses with
              high-quality e-commerce solutions that are fast, affordable, and
              tailored to their needs. Whether you’re launching a new business
              or scaling an existing one, we’ve got you covered with our
              innovative solutions.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src={AboutImage}
              alt="About My Shop Nepal"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Company Values Section */}
        <div className="row my-5">
          <div className="col-lg-4 text-center">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body">
                <i className="bi bi-lightbulb display-3 text-warning"></i>
                <h5 className="card-title mt-3">Innovation</h5>
                <p className="card-text">
                  We deliver cutting-edge solutions designed to enhance your
                  online business and drive growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body">
                <i className="bi bi-people display-3 text-primary"></i>
                <h5 className="card-title mt-3">Customer Focus</h5>
                <p className="card-text">
                  Your business success is our priority. We provide personalized
                  support and services to help you achieve your goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body">
                <i className="bi bi-graph-up display-3 text-success"></i>
                <h5 className="card-title mt-3">Growth</h5>
                <p className="card-text">
                  Our solutions are designed to help your business grow and
                  expand in the competitive e-commerce landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center my-5">
          <h2 className="font-weight-bold">Start Your E-Commerce Journey with Us!</h2>
          <p className="lead mt-3">Let us help you turn your e-commerce dreams into reality.</p>
          <a
            href="/contact"
            className="btn btn-primary btn-lg rounded-pill px-5 shadow-sm"
          >
            Contact Us Today!
          </a>
        </div>
      </div>
    </Container>
  );
}

export default About;
