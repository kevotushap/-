import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #2557fa 0%, #a300ff 100%)",
        color: "#fff",
        boxShadow: "0 2px 16px rgba(60,72,100,0.12)",
        padding: "0",
        marginBottom: "0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: 80,
        }}
      >
        {/* Company Name */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
              fontWeight: 900,
              fontSize: "2.8rem",
              letterSpacing: "2px",
              color: "#fff",
              textShadow: "1px 1px 8px #a300ff80, 0 2px 2px #2557fa55",
              userSelect: "none",
            }}
          >
            нєανєηℓу
          </span>
        </Link>
        {/* Links */}
        <div style={{ display: "flex", gap: 32 }}>
          <Link
            to="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "color 0.15s",
              padding: "8px 0",
              borderBottom: "2px solid transparent",
            }}
            activeStyle={{
              borderBottom: "2px solid #fff",
            }}
          >
            Home
          </Link>
          <Link
            to="/causes"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "color 0.15s",
              padding: "8px 0",
              borderBottom: "2px solid transparent",
            }}
          >
            Causes
          </Link>
          <Link
            to="/about"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "color 0.15s",
              padding: "8px 0",
              borderBottom: "2px solid transparent",
            }}
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "color 0.15s",
              padding: "8px 0",
              borderBottom: "2px solid transparent",
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}