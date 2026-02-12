import React, { useEffect, useState } from "react";

/* ==============================
   Slow Luxury Counter (Decimal Safe)
   ============================== */
const StatCard = ({ value, display, label, decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const end = value;
    const duration = 1200; // smooth & premium
    const step = end / (duration / 30);

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="col-md-4 col-12">
      <div className="stat-card p-4 text-center">
        <h2>
          <span className="odometer">
            {count.toFixed(decimals)}
          </span>
          <span className="stat-suffix">{display}</span>
        </h2>
        <p>{label}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="why-page">
      <div className="container py-5">

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Why Choose FAPBADRI</h1>
          <p>
            Pune’s most trusted destination for premium curtain accessories and furnishing
            hardware — serving homeowners, professionals, and large-scale projects.
          </p>
        </div>

        {/* Stats */}
        <div className="row g-4 justify-content-center mb-5">
          <StatCard value={4.1} decimals={1} display="★" label="Google Rating" />
          <StatCard value={4.6} decimals={1} display="★" label="E-commerce Amazon Rating" />
          <StatCard value={30} decimals={0} display="+" label="Years of Industry Experience" />
        </div>

        {/* Feature Cards */}
        <div className="row g-4">
          {[
            ["Physical Store in Pune", "Visit our fully stocked showroom at Budhwar Peth."],
            ["Premium & Durable Products", "Engineered for long-term daily use with reliable performance."],
            ["Retail & Bulk Supply", "We serve individual buyers, contractors, and large commercial projects."],
            ["Fair & Transparent Pricing", "Honest pricing with consistent quality across all categories."],
            ["Multi-Channel Availability", "Shop via store - Amazon, Flipkart And Meesho"],
            ["Trusted Across Pune", "Backed by strong local reputation and verified customer reviews."]
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="why-card p-4 h-100">
                <h5>{item[0]}</h5>
                <p>{item[1]}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
