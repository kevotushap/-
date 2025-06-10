import React from "react";

export default function FAQ() {
  return (
    <section style={{ padding: "40px 0", background: "linear-gradient(135deg, #ff4bc8 0%, #a300ff 100%)", textAlign: "center", color: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: 20 }}>
          Frequently Asked Questions
        </h2>
        <div style={{ textAlign: "left", margin: "0 auto", maxWidth: 700 }}>
          <div style={{ marginBottom: 20 }}>
            <strong style={{ color: "#fff" }}>How do I start a fundraising campaign?</strong>
            <p style={{ color: "#ffe1fa" }}>
              Click on "Create Campaign", fill in your details, and start sharing your cause.
            </p>
          </div>
          <div style={{ marginBottom: 20 }}>
            <strong style={{ color: "#fff" }}>Is there a fee for using the platform?</strong>
            <p style={{ color: "#ffe1fa" }}>
              No, our platform is free for fundraisers. Optional tips support our services.
            </p>
          </div>
          <div>
            <strong style={{ color: "#fff" }}>How are donations processed?</strong>
            <p style={{ color: "#ffe1fa" }}>
              Donations are securely processed and transferred to your specified account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}