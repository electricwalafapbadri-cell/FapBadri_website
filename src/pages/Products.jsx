import React from "react";
import { useNavigate } from "react-router-dom";

/* ================= COMPONENTS ================= */
import ProductHero from "../products/ProductHero";
import MarketplaceButtons from "../products/MarketplaceButtons";

/* ================= STYLES ================= */
import "../products/product.css";

const Products = () => {
  const navigate = useNavigate();

  return (
    <main className="products-page">
      
      {/* ================= HERO ================= */}
      <ProductHero />

      {/* ================= MARKETPLACE (B2C) ================= */}
      <MarketplaceButtons />

      {/* ================= DELIVERY & LOGISTICS CTA ================= */}
      <section className="products-gate-actions">
        <button
          className="logistics-btn"
          onClick={() => navigate("/products/delivery-partners")}
        >
          Delivery & Logistics
        </button>
      </section>

    </main>
  );
};

export default Products;
