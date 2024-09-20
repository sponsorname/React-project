import React from "react";
import Container from "#components/Container";
import ContactUsImage from "src/assets/Image/contact.png";

const Contact: React.FC = () => {
  return (
    <Container>
      <h1
        className="text-center mb-4 text-primary"
        style={{ fontSize: "36px", fontWeight: "bold" }}
      >
        Contact Us
      </h1>

      <div className="row justify-content-center">
        {/* Photo Upload Section on Left */}
        <div
          className="col-lg-6 col-md-10 d-flex justify-content-center"
          style={{ paddingLeft: "30px" }}
        >
          {ContactUsImage && (
            <div className="text-center">
              <img
                src={ContactUsImage}
                alt="E-commerce Preview"
                className="img-fluid shadow-sm rounded"
                style={{ height: "100%", width: "100%", objectFit: "fill" }}
              />
            </div>
          )}
        </div>

        {/* Contact Form Section on Right */}
        <div className="col-lg-6 col-md-10 d-flex justify-content-center align-items-center">
          <form
            id="contact_form"
            name="contact_form"
            method="post"
            className="p-4 rounded shadow-sm w-100"
            style={{ backgroundColor: "#f9f9f9", height: "100%" }} // Set form height to 100%
          >
            {/* Form Fields */}
            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="first_name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  maxLength={50}
                  className="form-control rounded-pill"
                  id="first_name"
                  name="first_name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="last_name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  maxLength={50}
                  className="form-control rounded-pill"
                  id="last_name"
                  name="last_name"
                />
              </div>
            </div>

            {/* More Fields */}
            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="email_addr" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  maxLength={50}
                  className="form-control rounded-pill"
                  id="email_addr"
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone_input" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  maxLength={50}
                  className="form-control rounded-pill"
                  id="phone_input"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
            </div>

            {/* Message Field */}
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <div className="mb-4">
              <textarea
                className="form-control rounded"
                id="message"
                name="message"
                rows={3}
                placeholder="Your message here..."
                style={{
                  backgroundColor: "#f8f9fa",
                  border: "2px solid #007bff",
                  padding: "12px 20px",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  resize: "none",
                  height: "150px",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#0056b3";
                  e.currentTarget.style.boxShadow =
                    "0 0 5px rgba(0, 123, 255, 0.5)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#007bff";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-pill px-4"
                style={{
                  background: "linear-gradient(45deg, #007bff, #00d4ff)",
                  border: "none",
                  padding: "12px 30px",
                  boxShadow: "0 4px 15px rgba(0, 123, 255, 0.4)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.transform = "scale(1.05)";
                  (e.target as HTMLElement).style.boxShadow =
                    "0 6px 20px rgba(0, 123, 255, 0.5)";
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.transform = "scale(1)";
                  (e.target as HTMLElement).style.boxShadow =
                    "0 4px 15px rgba(0, 123, 255, 0.4)";
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Information and Map Section */}
      {/* ... */}

      {/* Contact Information Cards Section */}
      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div
            className="card border-0 shadow-lg h-100"
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <div className="card-body text-center">
              <i className="bi bi-building display-3 text-primary"></i>
              <h5 className="card-title mt-3 text-primary">OUR MAIN OFFICE</h5>
              <p className="card-text text-muted">New Baneshwor, Kathmandu</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="card border-0 shadow-lg h-100"
            style={{ backgroundColor: "#e8f5e9" }}
          >
            <div className="card-body text-center">
              <i className="bi bi-telephone-fill display-3 text-success"></i>
              <h5 className="card-title mt-3 text-success">PHONE NUMBER</h5>
              <p className="card-text text-muted">+977-9824537556</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="card border-0 shadow-lg h-100"
            style={{ backgroundColor: "#fff8e1" }}
          >
            <div className="card-body text-center">
              <i className="bi bi-envelope-fill display-3 text-warning"></i>
              <h5 className="card-title mt-3 text-warning">EMAIL</h5>
              <p className="card-text text-muted">bt982453755@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Our Location</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.076368829156!2d85.32417251531528!3d27.68423938280068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190e0d002e09%3A0x9e5d7c5c3b52c1a2!2sNew%20Baneshwor%2C%20Kathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1623430013481!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
