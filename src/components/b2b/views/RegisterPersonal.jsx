import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * B2B REGISTER — STEP 1 (PERSONAL IDENTITY)
 * Frontend only | Backend in Phase 2
 */

const RegisterPersonal = ({ onNext }) => {
  const [form, setForm] = useState({
    fullName: "",
    personalEmail: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  /* ===============================
     VALIDATIONS (UNCHANGED)
  ============================== */

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    return (
      password.length >= 8 &&
      hasUpper &&
      hasLower &&
      hasNumber &&
      hasSpecial
    );
  };

  const validateUsername = (username) => {
    return /^[a-zA-Z0-9]{4,20}$/.test(username);
  };

  /* ===============================
     GOOGLE SIGN-IN (PLACEHOLDER)
     Backend will be added in Phase 2
  ============================== */

  const handleGoogleSignIn = () => {
    alert(
      "Google Sign-In initiated.\n\n" +
      "This option is available for business users only.\n" +
      "OTP and business verification will still be required."
    );
  };

  /* ===============================
     SUBMIT
  ============================== */

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateUsername(form.username)) {
      setError(
        "Username must be 4–20 characters and contain only letters and numbers."
      );
      return;
    }

    if (!validatePassword(form.password)) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    /**
     * FRONTEND-ONLY STORAGE (TEMP)
     * Backend validation in Phase 2
     */
    const payload = {
      fullName: form.fullName,
      personalEmail: form.personalEmail,
      username: form.username
    };

    console.log("B2B Personal Registration:", payload);

    if (onNext) onNext(payload);
  };

  return (
    <section className="b2b-container">
      <div className="b2b-card">

        <h2 className="b2b-title">Create B2B Account</h2>

        <p className="b2b-subtitle">
          Step 1 of 2 — Personal identity verification.
          <br />
          <strong>This portal is strictly for verified business partners.</strong>
        </p>

        {/* ================= GOOGLE SIGN-IN ================= */}
        <button
          type="button"
          className="b2b-btn-google"
          onClick={handleGoogleSignIn}
        >
          Continue with Google (Business Account)
        </button>

        <div className="b2b-divider">
          <span>or register manually</span>
        </div>

        {/* ================= ERROR ================= */}
        {error && (
          <div className="alert alert-danger" style={{ fontSize: "0.85rem" }}>
            {error}
          </div>
        )}

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit}>

          <input
            className="form-control"
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) =>
              setForm({ ...form, fullName: e.target.value })
            }
            required
          />

          <input
            className="form-control"
            type="email"
            placeholder="Personal Email Address"
            value={form.personalEmail}
            onChange={(e) =>
              setForm({ ...form, personalEmail: e.target.value })
            }
            required
          />

          <div className="b2b-hint">
            Personal email is used for identity verification and account recovery.
          </div>

          <input
            className="form-control"
            placeholder="Create Username"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            required
          />

          <div className="b2b-hint">
            Letters and numbers only (4–20 characters).
          </div>

          <input
            className="form-control"
            type="password"
            placeholder="Create Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <div className="b2b-password-rules">
            ✔ Minimum 8 characters <br />
            ✔ Uppercase & lowercase letters <br />
            ✔ At least one number <br />
            ✔ One special character
          </div>

          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            required
          />

          <button type="submit" className="b2b-btn-primary">
            Continue to Verification
          </button>
        </form>

        {/* ================= FOOTER ================= */}
        <div className="b2b-auth-footer">
          <span>Already registered?</span>
          <Link to="/b2b/login"> Sign In</Link>
        </div>

        <div className="b2b-security-note">
          Business details, GST and location will be collected after OTP verification.
        </div>

        <div className="b2b-b2c-warning">
          Retail (B2C) customers do not need to register.
          This portal is exclusively for business accounts.
        </div>

      </div>
    </section>
  );
};

export default RegisterPersonal;
