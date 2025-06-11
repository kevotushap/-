import React, { useEffect, useState } from "react";

// Use the same calamity images as FeaturedCauses and Testimonials
const calamityBackgroundImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1465101178521-c1a9136a87e0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
];

// The steps of your process as nodes for the flowchart (removed Sign Up step)
const steps = [
  { title: "Start a Cause", desc: "Tell your story and set your goal." },
  { title: "Share & Inspire", desc: "Share your cause with the world." },
  { title: "Receive Donations", desc: "Watch kindness flow in." },
  { title: "Make an Impact", desc: "Funds reach those in need, and you see the change!" }
];

export default function HowItWorks() {
  // Background rotator
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
        padding: "60px 0 70px 0",
        background: `url(${calamityBackgroundImages[bgIdx]}) center/cover no-repeat fixed`,
        minHeight: 500,
        position: "relative",
        transition: "background-image 1s"
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.6rem",
            fontWeight: "bold",
            marginBottom: 18,
            color: "#fff",
            textShadow: "2px 3px 12px #0008"
          }}
        >
          How It Works
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.18rem",
            color: "#ffe1fa",
            marginBottom: 50,
            textShadow: "1px 2px 12px #0007"
          }}
        >
          See how easy it is to make a difference!
        </p>
        {/* Fancy Flow Chart */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 0,
          flexWrap: "wrap"
        }}>
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                style={{
                  background: "rgba(255,255,255,0.89)",
                  borderRadius: 22,
                  boxShadow: "0 4px 22px #2557fa22, 0 1.5px 8px #ff4bc822",
                  padding: "32px 38px",
                  minWidth: 180,
                  maxWidth: 230,
                  margin: "0 0px",
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "transform 0.2s, box-shadow 0.2s"
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2557fa 60%, #ff4bc8 100%)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: 16,
                  boxShadow: "0 2px 8px #2557fa55"
                }}>
                  {idx + 1}
                </div>
                <h3 style={{
                  fontWeight: 700,
                  color: "#2557fa",
                  fontSize: "1.15rem",
                  margin: 0,
                  marginBottom: 8,
                  textAlign: "center"
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: "#a300ff",
                  fontSize: "1.02rem",
                  textAlign: "center",
                  margin: 0
                }}>
                  {step.desc}
                </p>
              </div>
              {/* Arrow except after last step */}
              {idx < steps.length - 1 && (
                <div
                  style={{
                    width: 64,
                    minWidth: 64,
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  aria-hidden
                >
                  {/* Fancy SVG arrow with animation */}
                  <svg width="44" height="44" style={{ filter: "drop-shadow(0 2px 7px #4bc8ffcc)" }}>
                    <defs>
                      <linearGradient id="arrowGradient" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#2557fa" />
                        <stop offset="100%" stopColor="#ff4bc8" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M8 22 Q22 22 32 22 M32 22 L26 16 M32 22 L26 28"
                      stroke="url(#arrowGradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <animate
                        attributeName="d"
                        values="
                          M8 22 Q22 22 32 22 M32 22 L26 16 M32 22 L26 28;
                          M8 22 Q22 10 32 22 M32 22 L26 16 M32 22 L26 28;
                          M8 22 Q22 22 32 22 M32 22 L26 16 M32 22 L26 28
                        "
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}