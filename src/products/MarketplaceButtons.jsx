import React from "react";

/* ======================================================
   ASSETS
====================================================== */

// Marketplace Logos
import amazonLogo from "../assets/icons/marketplaces/amazon_logo.png";
import flipkartLogo from "../assets/icons/marketplaces/flipkart_logo.png";
import meeshoLogo from "../assets/icons/marketplaces/meesho_logo.png";

/* ======================================================
   CONFIG — SINGLE SOURCE OF TRUTH
====================================================== */

const MARKETPLACE_CONFIG = {
  amazon: {
    url: "https://www.amazon.in/stores/FAPBADRI/ExpandableRods/page/C9A23F69-06E5-4C89-AFC5-84D0196D9528",
  },
  flipkart: {
    url: "https://www.flipkart.com/search?q=fapbadri&marketplace=FLIPKART",
  },
  meesho: {
    url: "https://www.meesho.com/MA53Enterprises?ms=2link",
  },
};

/* ======================================================
   COMPONENT
====================================================== */

const MarketplaceButtons = () => {

  /* ===============================
     ANALYTICS (SAFE STUB)
  ================================ */
  const trackEvent = (event, meta = {}) => {
    console.log(`[EVENT] ${event}`, meta);
  };

  return (
    <section className="marketplace-section">
      <div className="marketplace-buttons">

        {/* ================= AMAZON ================= */}
        <a
          href={MARKETPLACE_CONFIG.amazon.url}
          target="_blank"
          rel="noopener noreferrer"
          className="marketplace-btn amazon"
          onClick={() => trackEvent("amazon_click")}
        >
          <img src={amazonLogo} alt="Amazon Marketplace" />
          <span>Shop on Amazon →</span>
        </a>

        {/* ================= FLIPKART ================= */}
        <a
          href={MARKETPLACE_CONFIG.flipkart.url}
          target="_blank"
          rel="noopener noreferrer"
          className="marketplace-btn flipkart"
          onClick={() => trackEvent("flipkart_click")}
        >
          <img src={flipkartLogo} alt="Flipkart Marketplace" />
          <span>Shop on Flipkart →</span>
        </a>

        {/* ================= MEESHO ================= */}
        <a
          href={MARKETPLACE_CONFIG.meesho.url}
          target="_blank"
          rel="noopener noreferrer"
          className="marketplace-btn meesho"
          onClick={() => trackEvent("meesho_click")}
        >
          <img src={meeshoLogo} alt="Meesho Marketplace" />
          <span>Shop on Meesho →</span>
        </a>

      </div>
    </section>
  );
};

export default MarketplaceButtons;
