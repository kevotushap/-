import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #2557fa 0%, #a300ff 100%)",
        padding: "60px 0 40px 0",
        textAlign: "center",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 16px" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: 20,
            color: "#fff",
            lineHeight: 1.1,
            textShadow: "1px 1px 8px #a300ff55",
          }}
        >
          Top 20 Best Donation & Fundraising Websites
        </h1>
        <p
          style={{
            fontSize: "1.4rem",
            color: "#e0d7ff",
            marginBottom: 32,
            lineHeight: 1.6,
            textShadow: "0 1px 2px #2557fa55",
          }}
        >
          Discover the most effective fundraising platforms and donation websites that can help you maximize contributions for your cause. Whether you're a nonprofit, school, or individual, find the perfect tool to boost your fundraising efforts.
        </p>
        <a
          href="#featured-causes"
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #ff4bc8 0%, #2557fa 100%)",
            color: "#fff",
            padding: "18px 42px",
            borderRadius: "30px",
            fontSize: "1.2rem",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 24px #a300ff77",
            transition: "background 0.2s, transform 0.2s",
            marginTop: 16,
            border: "none",
          }}
        >
          Explore Top Fundraising Sites
        </a>
      </div>
    </section>
  );
}