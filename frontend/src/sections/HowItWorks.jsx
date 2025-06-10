import React from "react";

export default function HowItWorks() {
  return (
    <section style={{
      padding: "40px 0",
      background: "linear-gradient(135deg, #a300ff 0%, #2557fa 100%)",
      textAlign: "center",
      color: "#fff"
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: 20 }}>
          How It Works
        </h2>
        <p style={{ fontSize: "1.15rem", color: "#ffe1fa", marginBottom: 32 }}>
          Start your fundraising journey in three simple steps.
        </p>
        <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
          <div style={{
            background: "linear-gradient(120deg, #fff 60%, #ffb1f6 100%)",
            borderRadius: "18px",
            boxShadow: "0 2px 16px #ff4bc822",
            padding: "22px 28px",
            minWidth: 220,
            maxWidth: 280,
            color: "#a300ff",
          }}>
            <h3>1. Create a Campaign</h3>
            <p style={{ color: "#2557fa" }}>Set up your cause and share your story with the world.</p>
          </div>
          <div style={{
            background: "linear-gradient(120deg, #fff 60%, #b1c6ff 100%)",
            borderRadius: "18px",
            boxShadow: "0 2px 16px #2557fa22",
            padding: "22px 28px",
            minWidth: 220,
            maxWidth: 280,
            color: "#2557fa",
          }}>
            <h3>2. Share with Supporters</h3>
            <p style={{ color: "#a300ff" }}>Promote your campaign and invite your community to donate.</p>
          </div>
          <div style={{
            background: "linear-gradient(120deg, #fff 60%, #d1b1ff 100%)",
            borderRadius: "18px",
            boxShadow: "0 2px 16px #a300ff22",
            padding: "22px 28px",
            minWidth: 220,
            maxWidth: 280,
            color: "#ff4bc8",
          }}>
            <h3>3. Make an Impact</h3>
            <p style={{ color: "#a300ff" }}>Use raised funds to support your cause and update your donors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}