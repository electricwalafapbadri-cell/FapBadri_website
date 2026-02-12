import React from "react";

/* ================= IMAGES ================= */
import heroInterior from "../assets/images/about-us-interior-hero.png";
import curtainHardware from "../assets/images/curtain-hardware.png";
import lifestyle from "../assets/images/about-us-interior-lifestyle.png";

/* ================= FLAGS ================= */
import indiaFlag from "../assets/images/India.png";
import usaFlag from "../assets/images/USA.png";
import mexicoFlag from "../assets/images/Mexico.png";

/* ================= PAGE ================= */
const AboutUs = () => {
  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroInterior})` }}
      >
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1>FAPBADRI</h1>
          <p>
            Building dependable curtain & furnishing hardware with integrity,
            precision, and long-term trust.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="about-section">
        <div className="about-container">
          <h2>Our Story</h2>
          <p>
            Around 30 years ago, Mr. Fakhruddin Badri Patanwala stepped into the hardware
            business with a clear belief — quality must remain dependable and
            pricing must stay honest.
          </p>
          <p>
            Over decades of retail and wholesale experience, FAPBADRI evolved
            into a trusted name in curtain accessories and furnishing hardware
            across Pune and online marketplaces.
          </p>
        </div>
      </section>

      {/* ================= BRAND PSYCHOLOGY ================= */}
      <section className="about-section dark">
        <div className="about-container two-col">
          <img src={curtainHardware} alt="Premium curtain hardware" />
          <div>
            <h2>Brand Psychology</h2>
            <p>
              FAPBADRI is designed for customers who value durability over
              decoration and performance over trends.
            </p>
            <p>
              Our products quietly blend into interiors while delivering years
              of reliable daily use.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="about-section">
        <div className="about-container two-col reverse">
          <div>
            <h2>Our Philosophy</h2>
            <p>
              Hardware should not need replacement every few years.
              It should perform consistently under real living conditions.
            </p>
            <p>
              We focus on material integrity, load strength, corrosion resistance,
              and packaging discipline — not marketing hype.
            </p>
          </div>
          <img src={lifestyle} alt="Interior lifestyle" />
        </div>
      </section>

      {/* ================= MA ENTERPRISES ================= */}
      <section className="about-section dark">
        <div className="about-container">
          <h2>MA Enterprises</h2>
          <p className="about-subtitle">
            Centralized Packing & Fulfilment Unit
          </p>

          <p>
            MA Enterprises is the operational backbone of FAPBADRI.
            All marketplace orders are quality-checked, packed, and dispatched
            from this facility.
          </p>

          <div className="about-stats">
            <div>
              <strong>15</strong>
              <span>Warehouse & Logistics Staff</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Retail Operations</span>
            </div>
            <div>
              <strong>18</strong>
              <span>Total Employees</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AMAZON NETWORK ================= */}
      <section className="about-section">
        <div className="about-container">
          <h2>Amazon Fulfilment & Logistics Network</h2>

          <p>
            FAPBADRI operates through a structured dual-channel fulfilment model
            combining <strong>Fulfilment by Amazon (FBA)</strong> and
            <strong> Merchant Fulfilled Network (MFN)</strong> to ensure
            reliability, delivery speed, and inventory control.
          </p>

          <h3 className="about-subheading">Active FBA Regions (India)</h3>

          <ul className="about-list">
  <li>
    <strong>Maharashtra</strong> — Pune & Bhiwandi fulfilment clusters
  </li>

  <li>
    <strong>Delhi NCR</strong> — Mohan Cooperative Industrial Estate
  </li>

  <li>
    <strong>Haryana</strong> — Gurgaon & Sohna logistics parks
  </li>

  <li>
    <strong>Karnataka</strong> — Bengaluru fulfilment corridor
  </li>

  <li>
    <strong>West Bengal</strong> — Howrah distribution zone
  </li>

  <li>
    <strong>Telangana</strong> — Hyderabad logistics region
    (Shamshabad – Mamidipally fulfilment corridor)
  </li>
</ul>


          <h3 className="about-subheading">Global Amazon Operations</h3>

          <p>
            In addition to India, FAPBADRI is operationally enabled for
            Amazon Global expansion across international marketplaces.
          </p>

          {/* ================= FLAGS ================= */}
          <div className="global-flags">
            <div className="flag-card">
              <img src={indiaFlag} alt="India" />
              <span>India</span>
            </div>

            <div className="flag-card">
              <img src={usaFlag} alt="United States" />
              <span>United States</span>
            </div>

            <div className="flag-card">
              <img src={mexicoFlag} alt="Mexico" />
              <span>Mexico</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRESENT DAY ================= */}
      <section className="about-section">
        <div className="about-container">
          <h2>Today</h2>
          <p>
            FAPBADRI serves customers through its physical retail store and
            online platforms including Amazon, Flipkart, and Meesho.
          </p>
          <p>
            Every order — online or offline — carries the same promise of
            durability, fairness, and long-term value.
          </p>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
