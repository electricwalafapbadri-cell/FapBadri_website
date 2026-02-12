import React from "react";

const MarketplaceValue = () => {
  return (
    <section className="marketplace-value-section">
      <div className="marketplace-value-container">

        <h2 className="marketplace-value-title">
          A Smarter Way to Shop FAPBADRI Products
        </h2>

        <p className="marketplace-value-subtitle">
          We partner with India’s most trusted marketplaces to ensure
          secure payments, reliable delivery, and a seamless buying experience.
        </p>

        <div className="marketplace-value-grid">

          <div className="marketplace-value-card">
            <h3>Authentic Products</h3>
            <p>
              All FAPBADRI products are supplied directly through
              verified marketplace channels to ensure originality and quality.
            </p>
          </div>

          <div className="marketplace-value-card">
            <h3>Secure Payments</h3>
            <p>
              Transactions are protected by marketplace-grade
              payment systems with buyer safeguards.
            </p>
          </div>

          <div className="marketplace-value-card">
            <h3>Nationwide Delivery</h3>
            <p>
              Orders are fulfilled through established logistics partners,
              covering metros, towns, and remote locations.
            </p>
          </div>

          <div className="marketplace-value-card">
            <h3>Easy Returns & Support</h3>
            <p>
              Enjoy marketplace-backed return policies and customer support
              for a worry-free purchase experience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MarketplaceValue;
