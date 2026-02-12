import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="luxury-navbar-wrapper sticky-top">
      <nav className="navbar navbar-expand-lg luxury-navbar">
        <div className="container-fluid custom">

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            className="navbar-toggler luxury-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* ================= NAV LINKS ================= */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-center luxury-nav-list">

              {/* Home */}
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `nav-link luxury-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* Products */}
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `nav-link luxury-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Products
                </NavLink>
              </li>

              {/* Why Choose Us */}
              <li className="nav-item">
                <NavLink
                  to="/why-choose-us"
                  className={({ isActive }) =>
                    `nav-link luxury-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Why Choose Us
                </NavLink>
              </li>

              {/* About Us */}
              <li className="nav-item">
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `nav-link luxury-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  About Us
                </NavLink>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link luxury-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>

              {/* ================= 🔐 B2B LOCKED CTA ================= */}
              <li className="nav-item ms-lg-4 d-flex align-items-center">
                <button
                  type="button"
                  className="luxury-b2b-btn locked"
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  🔒 B2B Sign In
                  <span className="b2b-soon"></span>
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
