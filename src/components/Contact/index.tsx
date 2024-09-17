import React from 'react';
import Container from '#components/Container';

const Contact: React.FC = () => {
  return (
    <Container>
      <div className="my-5">
        <h1 className="text-center mb-4 text-primary">Contact Us</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <form id="contact_form" name="contact_form" method="post">
              <div className="mb-4 row">
                <div className="col-md-6">
                  <label htmlFor="first_name" className="form-label">First Name</label>
                  <input
                    type="text"
                    required
                    maxLength={50}
                    className="form-control"
                    id="first_name"
                    name="first_name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="last_name" className="form-label">Last Name</label>
                  <input
                    type="text"
                    required
                    maxLength={50}
                    className="form-control"
                    id="last_name"
                    name="last_name"
                  />
                </div>
              </div>
              <div className="mb-4 row">
                <div className="col-md-6">
                  <label htmlFor="email_addr" className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    maxLength={50}
                    className="form-control"
                    id="email_addr"
                    name="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone_input" className="form-label">Phone</label>
                  <input
                    type="tel"
                    required
                    maxLength={50}
                    className="form-control"
                    id="phone_input"
                    name="phone"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message here..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-4 btn-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
