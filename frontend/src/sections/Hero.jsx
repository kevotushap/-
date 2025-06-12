import React, { useEffect, useState } from "react";
import calamityBackgroundImages from "./sharedBackgroundImages";

const QR_CODE_IMAGE_URL = "QR Code.png";

export default function Hero() {
  const [bgIdx, setBgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIdx((prev) => (prev + 1) % calamityBackgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        // Use the same background as FeaturedCauses, HowItWorks, Testimonial
        background: `linear-gradient(120deg, rgba(30,23,53,0.54) 0%, rgba(30,23,53,0.64) 100%), url(${calamityBackgroundImages[bgIdx]}) center/cover no-repeat fixed`,
        minHeight: "60vh",
        padding: 0,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
        transition: "background-image 1s"
      }}
    >
      {/* Larger Top White Stripe (SVG wave) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 1440 180"
          width="100%"
          height="110"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            fill="#fff"
            d="M0,70 C500,180 1200,-40 1440,100 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
      {/* Left panel with purple hero curve, uses shared background */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          flex: "0 0 420px",
          minWidth: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "none",
          padding: 0,
          minHeight: "60vh",
          overflow: "hidden",
        }}
      >
        {/* Clipped region with the same background as section */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "inherit",
            WebkitClipPath:
              "path('M0,0 Q100,400 420,600 Q440,700 420,800 L0,800 Z')",
            clipPath:
              "path('M0,0 Q100,400 420,600 Q440,700 420,800 L0,800 Z')",
          }}
        />
        {/* Purple SVG left curve */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 450 800"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 2,
            pointerEvents: "none"
          }}
        >
          <path
            d="M0,0 Q100,400 420,600 Q440,700 420,800 L0,800 Z"
            fill="#a300ff"
            opacity="0.97"
          />
        </svg>
        <div
          style={{
            position: "relative",
            zIndex: 3,
            width: 240,
            height: 240,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/heavenly-logo.png"
            alt="Heavenly Logo"
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              border: "12px solid #fff",
              background:
                "linear-gradient(135deg, #f3f6ff 40%, #e9e3ff 100%)",
              objectFit: "cover",
              boxShadow:
                "0 0 120px 18px #a300ff18, 0 0 30px 3px #2557fa18",
              filter:
                "brightness(1.08) drop-shadow(0 4px 36px #2557fa22)",
              animation: "dim-strobe-glow 2.8s infinite alternate",
            }}
            className="dim-strobe-logo"
          />
        </div>
      </div>
      {/* Hero Content */}
      <div
        style={{
          flex: "1 1 0",
          maxWidth: 700,
          margin: "0 0 0 0",
          padding: "0 0 0 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "60vh",
          position: "relative",
          zIndex: 2,
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        <div style={{ maxWidth: 540 }}>
          <h1
            style={{
              fontSize: "3.2rem",
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: 68,
              color: "#fff",
              lineHeight: 1.1,
              textShadow: "1px 1px 8px #a300ff33",
            }}
          >
            Top 20 Best Donation & Fundraising Websites
          </h1>
          <p
            style={{
              fontSize: "1.4rem",
              color: "#ffe9fb",
              marginBottom: 32,
              lineHeight: 1.6,
              textShadow: "0 1px 2px #a300ff33",
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
              padding: "20px 50px",
              borderRadius: "30px",
              fontSize: "1.3rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 24px #a300ff44",
              transition: "background 0.2s, transform 0.2s",
              marginTop: 16,
              border: "none",
            }}
          >
            Donate to Top Fundraising Sites
          </a>
        </div>
      </div>
      {/* QR Code and Donate Button */}
      <div
        className="hero-qr-donate"
        style={{
          position: "absolute",
          right: 30,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255,255,255,0.87)",
          borderRadius: 24,
          boxShadow: "0 4px 32px #2557fa22",
          padding: "32px 32px 24px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: 220,
        }}
      >
        <img
          src={QR_CODE_IMAGE_URL}
          alt="Donate QR Code"
          style={{
            width: 180,
            height: 180,
            borderRadius: 12,
            marginBottom: 20,
            background: "#fff",
          }}
        />
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=PXSG8X767F6CU"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #001D6C 0%, #2557fa 100%)",
            color: "#fff",
            padding: "14px 44px",
            borderRadius: "24px",
            fontSize: "1.13rem",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 2px 12px #2557fa33",
            transition: "background 0.2s, transform 0.2s",
            border: "none",
            marginTop: 6,
            cursor: "pointer",
          }}
        >
          Donate
        </a>
      </div>
      <style>{`
        @keyframes dim-strobe-glow {
          0% {
            box-shadow: 0 0 120px 18px #a300ff11, 0 0 30px 3px #2557fa12;
          }
          40% {
            box-shadow: 0 0 170px 42px #2557fa22, 0 0 45px 9px #ff4bc811;
          }
          70% {
            box-shadow: 0 0 140px 22px #a300ff20, 0 0 38px 14px #2557fa10;
          }
          100% {
            box-shadow: 0 0 120px 18px #a300ff11, 0 0 30px 3px #2557fa12;
          }
        }
        @media (max-width: 900px) {
          .hero-qr-donate {
            position: static !important;
            transform: none !important;
            margin: 30px auto 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
}