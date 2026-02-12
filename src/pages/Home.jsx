import React from "react";
import Hero from "../components/Layout/Hero";

/* ================= MARKETPLACE LOGOS ================= */
import amazonLogo from "../assets/icons/marketplaces/amazon_logo.png";
import flipkartLogo from "../assets/icons/marketplaces/flipkart_logo.png";
import meeshoLogo from "../assets/icons/marketplaces/meesho_logo.png";

const Home = () => {
  return (
    <main>

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= B2B ENTERPRISE GATE (LOCKED) ================= */}
      <section className="b2b-cta-section">
        <div className="container-fluid custom text-center">

          <h3>B2B Ordering & Enterprise Accounts</h3>

          <p>
            Wholesale pricing, bulk supply, project-based fulfillment and
            dedicated logistics — designed for contractors, retailers and
            large-scale business buyers.
          </p>

          {/* LOCKED BUTTON — NO ROUTING */}
          <button
            className="b2b-cta-btn"
            type="button"
            aria-disabled="true"
            onClick={(e) => e.preventDefault()}
          >
            <span className="b2b-cta-note">
                B2B Enterprise access launching soon
            </span>
          </button>

        </div>
      </section>

      {/* ================= MARKETPLACE TRUST ================= */}
      <section className="marketplace-section">
        <div className="marketplace-wrapper">

          <div className="marketplace-text">
            <h5>Marketplace Recognition</h5>
            <p>
              Trusted seller on <strong>Amazon</strong>,{" "}
              <strong>Flipkart</strong> and{" "}
              <strong>Meesho</strong>, serving customers across India
              through verified logistics and fulfilment networks.
            </p>
          </div>

          <div className="marketplace-logos">
            <img src={amazonLogo} alt="Amazon Seller" />
            <img src={flipkartLogo} alt="Flipkart Seller" />
            <img src={meeshoLogo} alt="Meesho Seller" />
          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;
