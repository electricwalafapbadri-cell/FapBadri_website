import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import interiorHall from "../../assets/images/interior-hall.jpg";

const Hero = () => {
  return (
    <section
      className="hero-section container-fluid text-white"
      style={{
        backgroundImage: `url(${interiorHall})`
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay" />

      <div className="container position-relative hero-content">
        <div className="row align-items-center">
          <div className="col-md-7">

            <div className="hero-tagline text-uppercase fw-bold mb-2">
              Celebrate the Joy of Living
            </div>

            <h1 className="display-4 fw-bold mb-4">
              Pune’s Most Trusted Curtain Accessories & Furnishing Partner
            </h1>

            {/* CTA */}
            <div className="mb-4">
              <Link
                to="/products"
                className="btn btn-danger btn-lg rounded-pill hero-btn-primary"
              >
                Shop Now
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="d-flex flex-wrap gap-3">

              <div className="trust-badge px-3 py-2 rounded-pill">
                🔄 Easy Returns & Hassle-Free Support
              </div>

              <div className="trust-badge px-3 py-2 rounded-pill">
                ⭐ Trusted E-commerce Seller
              </div>

              <div className="trust-badge px-3 py-2 rounded-pill">
                🏠 Premium Home Furnishing Solutions
              </div>

              <div className="trust-badge px-3 py-2 rounded-pill">
                🔐 Secure B2C Payments via Marketplaces
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
