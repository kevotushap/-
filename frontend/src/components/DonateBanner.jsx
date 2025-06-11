import { useState } from "react";

export default function DonateBanner({
  message = "Your kindness transforms lives. Make a difference today.",
  cta = "Donate Now",
  sparkles = true,
  style = {},
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #ff4bc8 0%, #2557fa 100%)",
        color: "#fff",
        padding: "28px 16px",
        textAlign: "center",
        borderRadius: 22,
        margin: "36px auto",
        boxShadow: "0 4px 24px #a300ff35",
        fontSize: "1.35rem",
        fontWeight: 600,
        position: "relative",
        overflow: "hidden",
        maxWidth: 700,
        ...style,
      }}
    >
      {sparkles && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: -8,
            left: 18,
            fontSize: 36,
            animation: "sparkle 2s infinite linear",
            opacity: 0.8,
            pointerEvents: "none",
          }}
        >
          ✨
        </span>
      )}
      <span>
        {message}
      </span>
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=PXSG8X767F6CU"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginLeft: 22,
          background: hover
            ? "linear-gradient(90deg, #2557fa 0%, #ff4bc8 100%)"
            : "#fff",
          color: hover ? "#fff" : "#2557fa",
          fontWeight: 800,
          padding: "12px 38px",
          borderRadius: 32,
          textDecoration: "none",
          boxShadow: hover
            ? "0 6px 24px #2557fa33"
            : "0 4px 17px #ff4bc822",
          fontSize: "1.13rem",
          letterSpacing: 0.2,
          border: "none",
          outline: "none",
          transition: "all 0.22s cubic-bezier(.24,1.39,.53,.97)",
          verticalAlign: "middle",
          display: "inline-block",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {cta} <span role="img" aria-label="heart">❤️</span>
      </a>
      {sparkles && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            bottom: -8,
            right: 18,
            fontSize: 36,
            animation: "sparkle 2s infinite linear 1s",
            opacity: 0.8,
            pointerEvents: "none",
          }}
        >
          ✨
        </span>
      )}
      {/* Decorative animated wave */}
      <svg
        width="100%"
        height="25"
        viewBox="0 0 500 30"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <path
          d="M0,30 Q250,0 500,30 L500,30 L0,30 Z"
          fill="rgba(255,255,255,0.18)"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,30 Q250,0 500,30 L500,30 L0,30 Z;
              M0,30 Q250,10 500,30 L500,30 L0,30 Z;
              M0,30 Q250,0 500,30 L500,30 L0,30 Z
            "
          />
        </path>
      </svg>
      <style>
        {`
          @keyframes sparkle {
            0% { transform: scale(1) rotate(-8deg) translateY(0);}
            15% { transform: scale(1.5) rotate(-6deg) translateY(-4px);}
            30% { transform: scale(1.15) rotate(-4deg) translateY(1px);}
            45% { transform: scale(1.3) rotate(-6deg) translateY(-3px);}
            55% { transform: scale(1.1) rotate(-8deg) translateY(2px);}
            70% { transform: scale(1.35) rotate(-8deg) translateY(-2px);}
            85% { transform: scale(1.05) rotate(-8deg) translateY(2px);}
            100% { transform: scale(1) rotate(-8deg) translateY(0);}
          }
        `}
      </style>
    </div>
  );
}