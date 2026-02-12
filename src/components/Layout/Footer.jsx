import React from "react";
import { Link } from "react-router-dom";
import googleBadge from "../../assets/images/google.png";

const googleMapsLink =
  "https://www.google.com/maps/dir/?api=1&destination=928,+Budhwar+Peth+Rd,+Pune";

const Footer = () => {
  return (
    <footer className="luxury-footer">

      {/* ================= TRUST STRIP ================= */}
      <div className="trust-strip">
        <div className="trust-item">
          <img src={googleBadge} alt="Google Verified Business" />
          <span>Google Verified Business</span>
        </div>

        <div className="trust-item">
          <span>Pune’s Curtain Hardware Specialists</span>
        </div>

        <div className="trust-item">
          <span>Physical Store — Budhwar Peth</span>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="luxury-footer-content container-fluid">
        <div className="row">

          {/* ================= BRAND ================= */}
          <div className="col-md-4 mb-4 text-center">
            <div className="luxury-logo-3d">
              <img src="/logo.png" alt="FapBadri Logo" />
            </div>

            <div className="google-badge">
              <a
                href="https://www.google.com/search?q=Fapbadri+Budhwar+Peth+Pune"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googleBadge}
                  alt="Google Rating"
                  className="google-inline-icon"
                />
                 Google • Verified Store
              </a>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="col-md-3 mb-4">
            <h6 className="luxury-heading">Quick Links</h6>
            <ul className="luxury-list">
              <li>
                <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" onClick={() => window.scrollTo(0, 0)}>
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= PRODUCT CATEGORIES ================= */}
          <div className="col-md-3 mb-4">
            <h6 className="luxury-heading">Product Categories</h6>
            <ul className="luxury-list luxury-hover-3d">
              <li><span>Curtain Rods</span></li>
              <li><span>Curtain Rings</span></li>
              <li><span>Curtain Tracks</span></li>
              <li><span>Brackets & Blinds</span></li>
              <li><span>Hooks & Runners</span></li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="col-md-2 mb-4 footer-contact">
            <h6 className="luxury-heading">Contact</h6>

            <p>
              📞 <a href="tel:+919823030271">+91 98230 30271</a>
            </p>

            <div className="footer-address">
              
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                928, Budhwar Peth Rd<br />
                Opp. Bandukhwala Shop,<br />
                Rameshwar Chouk,<br />
                Pune – 411002
              </a>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="luxury-footer-bottom">
          © {new Date().getFullYear()} FapBadri. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;
