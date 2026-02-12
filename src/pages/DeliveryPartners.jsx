import React, { useEffect, useState } from "react";
import "../products/product.css";

/* HERO IMAGE */
import warehouseHero from "../assets/images/Logistics_warehouse.png";

/* LOGOS */
import amazonLogo from "../assets/icons/Logistics/amazon_icon.png";
import ekartLogo from "../assets/icons/Logistics/ekart_icon.png";
import tirupatiLogo from "../assets/icons/Logistics/tirupati-courier.png";
import xpressbeesLogo from "../assets/icons/Logistics/xpressbees.png";
import shadowfaxLogo from "../assets/icons/Logistics/shadowfax.png";

const DeliveryPartners = () => {
  /* ==================================================
     PREMIUM SLOW COUNT-UP — ENTERPRISE LEVEL
  ================================================== */

  const [orders, setOrders] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const targets = {
      orders: 200000, // 2 Lakh+
      experience: 7,
    };

    const duration = 3000;
    const startTime = performance.now();

    const easeOutExpo = (t) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);

      setOrders(Math.floor(eased * targets.orders));
      setExperience(Math.floor(eased * targets.experience));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setOrders(targets.orders);
        setExperience(targets.experience);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <main className="delivery-page">

      {/* ==================================================
         HERO — LOGISTICS AUTHORITY
      ================================================== */}
      <section
        className="delivery-hero"
        style={{ backgroundImage: `url(${warehouseHero})` }}
      >
        <div className="delivery-hero-overlay" />

        <div className="delivery-hero-content">
          <h1>Marketplace Fulfilment & Delivery Excellence</h1>

          <div className="hero-logos">
            {/* AMAZON — PRIMARY */}
            <a
              href="https://logistics.amazon.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-logo amazon"
            >
              <img src={amazonLogo} alt="Amazon Logistics" />
              <span>Amazon Fulfilled</span>
            </a>

            {/* OTHER PARTNERS */}
            <div className="hero-logo-grid">
              <a
                href="https://www.ekartlogistics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-logo ekart"
              >
                <img src={ekartLogo} alt="Ekart Logistics" />
                <span>Ekart</span>
              </a>

              <a
                href="http://www.shreetirupaticourier.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-logo tirupati"
              >
                <img src={tirupatiLogo} alt="Tirupati Courier" />
                <span>Tirupati</span>
              </a>

              <a
                href="https://www.xpressbees.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-logo xpressbees"
              >
                <img src={xpressbeesLogo} alt="XpressBees" />
                <span>XpressBees</span>
              </a>

              <a
                href="https://www.shadowfax.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-logo shadowfax"
              >
                <img src={shadowfaxLogo} alt="Shadowfax" />
                <span>Shadowfax</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
         ENTERPRISE TRUST STATS
      ================================================== */}
      <section className="logistics-stats">
        <div className="stats-container">

          <div className="stat">
            <h2>{orders.toLocaleString()}+</h2>
            <p>Orders Successfully Delivered Till Date</p>
          </div>

          <div className="stat">
            <h2>{experience}+</h2>
            <p>Years of E-commerce Marketplace Experience</p>
          </div>

        </div>
      </section>

      {/* ==================================================
         LOGISTICS CAPABILITIES
      ================================================== */}
      <section className="logistics-capabilities">
        <div className="cap-grid">

          <div>
            <h4>Pan-India Coverage</h4>
            <p>
              Structured reach across metros, Tier-2 & Tier-3 cities with reliable dispatch mapping.
            </p>
          </div>

          <div>
            <h4>B2C & B2B Fulfilment</h4>
            <p>
              Single unit to bulk project shipments with complete tracking transparency.
            </p>
          </div>

          <div>
            <h4>Prime & Fast Dispatch</h4>
            <p>
              Optimised inventory allocation ensures reduced delivery timelines and higher buyer confidence.
            </p>
          </div>

        </div>
      </section>

      
    </main>
  );
};

export default DeliveryPartners;
