import React from "react";
import { Link } from "react-router-dom";

const Gate = () => {
  return (
    <section className="b2b-section">
      <div className="b2b-locked">

        <h3>B2B Partner Portal</h3>

        <p>
          This portal is exclusively designed for registered business partners
          such as interior designers, contractors, retailers, architects and
          project firms.
        </p>

        <p>
          Wholesale pricing, RFQs, catalogs and account tools are available
          only after verification.
        </p>

        <div className="b2b-gate-actions">
          <Link to="/b2b/login" className="btn btn-dark me-2">
            B2B Login
          </Link>

          <Link to="/b2b/register" className="btn btn-outline-light">
            Create B2B Account
          </Link>
        </div>

        <div className="b2b-gate-note">
          <span>⚠️ Retail customers should shop via product pages.</span>
        </div>

      </div>
    </section>
  );
};

export default Gate;
