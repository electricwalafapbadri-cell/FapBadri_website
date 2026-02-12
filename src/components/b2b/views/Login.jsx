import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * B2B LOGIN — CORPORATE GRADE
 * Frontend only (backend in Phase 2)
 */

const Login = ({ onLoginSuccess, onB2CDetected }) => {
  const [form, setForm] = useState({
    identifier: "", // username OR email
    password: ""
  });

  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setInfo("");

    /**
     * FRONTEND MOCK LOGIC
     * -------------------
     * Later replaced with backend auth
     */

    // 🚫 Detect obvious B2C attempt (example logic)
    if (
      form.identifier.includes("@gmail.com") &&
      !form.identifier.includes("business")
    ) {
      setInfo(
        "This portal is reserved for registered business partners. " +
        "Retail customers can continue shopping directly from our store."
      );
      if (onB2CDetected) onB2CDetected();
      return;
    }

    // ✅ Mock success condition
    if (form.identifier && form.password.length >= 8) {
      onLoginSuccess({
        userType: "B2B",
        identifier: form.identifier
      });
    } else {
      setError(
        "Invalid login details. Please check your username/email and password."
      );
    }
  };

  return (
    <section className="b2b-container">
      <div className="b2b-card">

        <h2 className="b2b-title">B2B Partner Login</h2>

        <p className="b2b-subtitle">
          Access wholesale pricing, quotations, and business tools.
          <br />
          <strong>For registered business partners only.</strong>
        </p>

        {info && (
          <div className="alert alert-info" style={{ fontSize: "0.85rem" }}>
            {info}
          </div>
        )}

        {error && (
          <div className="alert alert-danger" style={{ fontSize: "0.85rem" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            className="form-control"
            placeholder="Username or Business Email"
            value={form.identifier}
            onChange={(e) =>
              setForm({ ...form, identifier: e.target.value })
            }
            required
          />

          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <div className="b2b-hint">
            Password must be at least 8 characters.
          </div>

          <button type="submit" className="b2b-btn-primary">
            Sign In
          </button>
        </form>

        {/* ================= HELPERS ================= */}

        <div className="b2b-auth-footer">
          <div style={{ marginBottom: "8px" }}>
            <Link to="/b2b/forgot-username">
              Forgot Username?
            </Link>
            {" · "}
            <Link to="/b2b/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <div>
            Not registered yet?
            <Link to="/b2b/register"> Create B2B Account</Link>
          </div>
        </div>

        {/* ================= SECURITY NOTE ================= */}
        <div className="b2b-security-note">
          This portal is strictly for verified business entities.
          Unauthorized access attempts are monitored.
        </div>

      </div>
    </section>
  );
};

export default Login;



