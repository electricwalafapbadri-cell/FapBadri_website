import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * OTP VERIFICATION — STEP 1.5
 * Email + Mobile verification
 * Frontend-only (mock OTP)
 * Backend ready (Phase 2)
 */

const OTPVerify = ({ onVerified }) => {
  const navigate = useNavigate();

  const [emailOTP, setEmailOTP] = useState("");
  const [mobileOTP, setMobileOTP] = useState("");
  const [status, setStatus] = useState({
    emailVerified: false,
    mobileVerified: false
  });
  const [error, setError] = useState("");

  /**
   * MOCK OTP (frontend simulation)
   * Backend will replace this logic
   */
  const MOCK_EMAIL_OTP = "123456";
  const MOCK_MOBILE_OTP = "654321";

  const verifyEmailOTP = () => {
    if (emailOTP === MOCK_EMAIL_OTP) {
      setStatus((prev) => ({ ...prev, emailVerified: true }));
      setError("");
    } else {
      setError("Invalid email verification code.");
    }
  };

  const verifyMobileOTP = () => {
    if (mobileOTP === MOCK_MOBILE_OTP) {
      setStatus((prev) => ({ ...prev, mobileVerified: true }));
      setError("");
    } else {
      setError("Invalid mobile verification code.");
    }
  };

  const handleContinue = () => {
    if (!status.emailVerified || !status.mobileVerified) {
      setError("Please complete both verifications to continue.");
      return;
    }

    console.log("OTP verification successful");

    if (onVerified) onVerified(true);

    // Move to business registration
    navigate("/b2b/register/business");
  };

  return (
    <section className="b2b-container">
      <div className="b2b-card">

        <h2 className="b2b-title">Verify Your Identity</h2>

        <p className="b2b-subtitle">
          For security and compliance, we verify all B2B accounts.
          <br />
          <strong>B2C accounts are not permitted.</strong>
        </p>

        {error && (
          <div className="alert alert-danger" style={{ fontSize: "0.85rem" }}>
            {error}
          </div>
        )}

        {/* ================= EMAIL OTP ================= */}
        <div className="b2b-otp-block">

          <h5>Email Verification</h5>

          <input
            className="form-control"
            placeholder="Enter 6-digit email OTP"
            value={emailOTP}
            onChange={(e) => setEmailOTP(e.target.value)}
            disabled={status.emailVerified}
          />

          {!status.emailVerified ? (
            <button
              className="b2b-btn-secondary"
              onClick={verifyEmailOTP}
            >
              Verify Email
            </button>
          ) : (
            <div className="b2b-verified">
              ✔ Email Verified
            </div>
          )}
        </div>

        {/* ================= MOBILE OTP ================= */}
        <div className="b2b-otp-block">

          <h5>Mobile Verification</h5>

          <input
            className="form-control"
            placeholder="Enter 6-digit mobile OTP"
            value={mobileOTP}
            onChange={(e) => setMobileOTP(e.target.value)}
            disabled={status.mobileVerified}
          />

          {!status.mobileVerified ? (
            <button
              className="b2b-btn-secondary"
              onClick={verifyMobileOTP}
            >
              Verify Mobile
            </button>
          ) : (
            <div className="b2b-verified">
              ✔ Mobile Verified
            </div>
          )}
        </div>

        {/* ================= CONTINUE ================= */}
        <button
          className="b2b-btn-primary mt-3"
          onClick={handleContinue}
          disabled={!status.emailVerified || !status.mobileVerified}
        >
          Continue to Business Details
        </button>

        <div className="b2b-security-note">
          OTP verification helps prevent fake, duplicate, or unauthorized access.
        </div>

      </div>
    </section>
  );
};

export default OTPVerify;
