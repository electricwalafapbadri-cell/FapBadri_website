import React from "react";
import contactImage from "../assets/images/contact.png";
import whatsappIcon from "../assets/images/whastapp.png";

const Contact = () => {
  const phoneNumber = "+919823030271";

  const whatsappLink =
    "https://wa.me/919823030271?text=Hello%20FapBadri,%20I%20would%20like%20to%20enquire%20about%20your%20products.";

  return (
    <main className="contact-page">

      {/* ================= HEADER ================= */}
      <section className="contact-header">
        <h1>Contact FAPBADRI</h1>
        <p>
          Premium curtain & furnishing hardware — trusted by homeowners,
          professionals, and enterprise buyers across Pune.
        </p>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="contact-section">
        <div className="contact-layout">

          {/* LEFT SIDE — IMAGE */}
          <div className="contact-image-wrap">
            <img
              src={contactImage}
              alt="FAPBADRI customer support"
              loading="lazy"
            />
          </div>

          {/* RIGHT SIDE — DETAILS */}
          <div className="contact-content">

            {/* BUSINESS INFORMATION */}
            <div className="contact-card">
              <h3>Business Information</h3>

              <div className="contact-item">
                <strong>Store Location</strong>
                <p>
                  928, Budhwar Peth Road,<br />
                  Opp. Bandukhwala Shop,<br />
                  Rameshwar Chowk,<br />
                  Pune – 411002
                </p>
              </div>

              <div className="contact-item">
                <strong>Sales & Orders (WhatsApp)</strong>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  <img src={whatsappIcon} alt="WhatsApp" />
                  +91 98230 30271
                </a>
              </div>

              <div className="contact-item">
                <strong>Business Hours</strong>
                <p>
                  Monday – Saturday<br />
                  10:30 AM – 8:00 PM
                </p>
              </div>

              <div className="contact-item">
                <strong>Business Type</strong>
                <p>
                  Retail · Wholesale · B2B Supply<br />
                  Amazon & Marketplace Seller
                </p>
              </div>
            </div>

            {/* EXPERT SUPPORT */}
            <div className="contact-card highlight">
              <h3>Expert Assistance</h3>

              <p>
                Need help with installation guidance, measurements,
                product compatibility, or bulk pricing?
                Speak directly with our product specialist.
              </p>

              <a
                href={`tel:${phoneNumber}`}
                className="contact-btn"
              >
                📞 Call Expert: +91 98230 30271
              </a>

              <p className="contact-note">
                We respond promptly during business hours.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
