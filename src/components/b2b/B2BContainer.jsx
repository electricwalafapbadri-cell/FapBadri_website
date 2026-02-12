import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Views
import Gate from "./views/Gate";
import Login from "./views/Login";
import RegisterPersonal from "./views/RegisterPersonal";
import OTPVerify from "./views/OTPVerify";
import RegisterBusiness from "./views/RegisterBusiness";
import Dashboard from "./views/Dashboard";

// Styles
import "./styles/b2b.css";

const B2BContainer = () => {
  /**
   * FRONTEND AUTH STATE (SIMULATION)
   * Backend / JWT will replace this later
   */
  const [b2bState, setB2BState] = useState({
    isAuthenticated: false,
    otpVerified: false,
    businessVerified: false,
    companyName: null
  });

  return (
    <Routes>

      {/* 🔒 ENTRY GATE */}
      <Route
        path="/"
        element={<Gate />}
      />

      {/* 🔑 LOGIN */}
      <Route
        path="login"
        element={
          <Login
            onLoginSuccess={() =>
              setB2BState(prev => ({
                ...prev,
                isAuthenticated: true
              }))
            }
          />
        }
      />

      {/* 👤 REGISTER — PERSONAL */}
      <Route
        path="register"
        element={<RegisterPersonal />}
      />

      {/* 🔐 OTP VERIFICATION */}
      <Route
        path="verify"
        element={
          b2bState.isAuthenticated ? (
            <OTPVerify
              onVerified={() =>
                setB2BState(prev => ({
                  ...prev,
                  otpVerified: true
                }))
              }
            />
          ) : (
            <Navigate to="/b2b/login" replace />
          )
        }
      />

      {/* 🏢 REGISTER — BUSINESS */}
      <Route
        path="business"
        element={
          b2bState.otpVerified ? (
            <RegisterBusiness
              onBusinessVerified={(company) =>
                setB2BState(prev => ({
                  ...prev,
                  businessVerified: true,
                  companyName: company
                }))
              }
            />
          ) : (
            <Navigate to="/b2b" replace />
          )
        }
      />

      {/* 📊 DASHBOARD */}
      <Route
        path="dashboard"
        element={
          b2bState.businessVerified ? (
            <Dashboard companyName={b2bState.companyName} />
          ) : (
            <Navigate to="/b2b" replace />
          )
        }
      />

      {/* 🚫 FALLBACK */}
      <Route
        path="*"
        element={<Navigate to="/b2b" replace />}
      />

    </Routes>
  );
};

export default B2BContainer;

