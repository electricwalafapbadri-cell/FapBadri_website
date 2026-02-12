import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * REGISTER BUSINESS — STEP 2
 * Business identity & compliance
 * Frontend-only (backend in Phase 2)
 */

const STATES = {
  Maharashtra: ["Pune", "Mumbai", "Nagpur"],
  Gujarat: ["Ahmedabad", "Surat"],
  Karnataka: ["Bengaluru"]
};

const BUSINESS_TYPES = [
  "Interior Designer",
  "Retailer / Dealer",
  "Builder / Contractor",
  "Hotel / Hospitality",
  "Architect",
  "Institution / Corporate Buyer"
];

const RegisterBusiness = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    companyName: "",
    gst: "",
    businessEmail: "",
    state: "",
    city: "",
    businessType: ""
  });

  const [error, setError] = useState("");

  /* --------------------------------
     VALIDATIONS (FRONTEND)
  -------------------------------- */

  const isBusinessEmail = (email) => {
    return !email.includes("@gmail") &&
           !email.includes("@yahoo") &&
           !email.includes("@outlook");
  };

  const isValidGST = (gst) => {
    return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(gst);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isBusinessEmail(form.businessEmail)) {
      setError("Please use an official business email address.");
      return;
    }

    if (!isValidGST(form.gst)) {
      setError("Invalid GST number format.");
      return;
    }

    console.log("Business Registration Data:", form);

    // Phase 2: POST /b2b/register/business
    navigate("/b2b/dashboard");
  };

  /* --------------------------------
     GOOGLE LOGIN (MOCK)
  -------------------------------- */

  const handleGoogleLogin = () => {
    alert(
      "Google B2B sign-in successful.\n\nOnly verified corporate Google accounts are accepted."
    );

    // Phase 2: Google OAuth → backend validation
    navigate("/b2b/dashboard");
  };

  return (
    <section className="b2b-container">
      <div className="b2b-card">

        <h2 className="b2b-title">Business Verification</h2>

        <p className="b2b-subtitle">
          This information is mandatory for GST compliance and wholesale access.
        </p>

        {error && (
          <div className="alert alert-danger" style={{ fontSize: "0.85rem" }}>
            {error}
          </div>
        )}

        {/* ================= BUSINESS FORM ================= */}
        <form onSubmit={handleSubmit}>

          <input
            className="form-control"
            placeholder="Registered Company Name"
            value={form.companyName}
            onChange={(e) =>
              setForm({ ...form, companyName: e.target.value })
            }
            required
          />

          <input
            className="form-control"
            placeholder="GST Number"
            value={form.gst}
            onChange={(e) =>
              setForm({ ...form, gst: e.target.value.toUpperCase() })
            }
            required
          />

          <input
            className="form-control"
            type="email"
            placeholder="Official Business Email (no Gmail/Yahoo)"
            value={form.businessEmail}
            onChange={(e) =>
              setForm({ ...form, businessEmail: e.target.value })
            }
            required
          />

          {/* STATE */}
          <select
            className="form-control"
            value={form.state}
            onChange={(e) =>
              setForm({ ...form, state: e.target.value, city: "" })
            }
            required
          >
            <option value="">Select State</option>
            {Object.keys(STATES).map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>

          {/* CITY */}
          <select
            className="form-control"
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
            required
            disabled={!form.state}
          >
            <option value="">Select City</option>
            {form.state &&
              STATES[form.state].map((city) => (
                <option key={city}>{city}</option>
              ))}
          </select>

          {/* BUSINESS TYPE */}
          <select
            className="form-control"
            value={form.businessType}
            onChange={(e) =>
              setForm({ ...form, businessType: e.target.value })
            }
            required
          >
            <option value="">Business Type</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>

          <button type="submit" className="b2b-btn-primary">
            Complete Registration
          </button>
        </form>

        {/* ================= GOOGLE SIGN IN ================= */}
        <div className="b2b-divider">OR</div>

        <button
          className="b2b-btn-google"
          onClick={handleGoogleLogin}
        >
          Continue with Google (Business Gmail)
        </button>

        <div className="b2b-security-note">
          Fake, duplicate or consumer accounts are permanently blocked.
        </div>

      </div>
    </section>
  );
};

export default RegisterBusiness;
