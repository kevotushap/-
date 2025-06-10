import React from "react";

export default function Testimonials() {
  return (
    <section style={{ padding: "40px 0", background: "linear-gradient(90deg, #2557fa 0%, #ff4bc8 100%)", textAlign: "center", color: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: 20, color: "#fff" }}>
          Testimonials
        </h2>
        <p style={{ fontSize: "1.15rem", color: "#ffe1fa", marginBottom: 32 }}>
          Hear what our supporters and beneficiaries have to say.
        </p>
        <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
          <div style={{
            background: "linear-gradient(120deg, #fff 60%, #ffb1f6 100%)",
            borderRadius: "18px",
            boxShadow: "0 2px 16px #ff4bc822",
            padding: "22px 28px",
            minWidth: 220,
            maxWidth: 280,
            color: "#2557fa",
          }}>
            <p style={{ fontStyle: "italic" }}>
              "This platform made fundraising so easy and transparent. Thank you!"
            </p>
            <p style={{ fontWeight: "bold", color: "#a300ff", marginTop: 10 }}>– Jane M.</p>
          </div>
          <div style={{
            background: "linear-gradient(120deg, #fff 60%, #b1c6ff 100%)",
            borderRadius: "18px",
            boxShadow: "0 2px 16px #2557fa22",
            padding: "22px 28px",
            minWidth: 220,
            maxWidth: 280,
            color: "#ff4bc8",
          }}>
            <p style={{ fontStyle: "italic" }}>
              "We reached our goal faster than we imagined. Highly recommended!"
            </p>
            <p style={{ fontWeight: "bold", color: "#2557fa", marginTop: 10 }}>– Alex R.</p>
          </div>
        </div>
      </div>
    </section>
  );
}