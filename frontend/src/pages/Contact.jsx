import DonateBanner from "../components/DonateBanner";

export default function Contact() {
  return (
    <div>
      <section
        style={{
          maxWidth: 520,
          margin: "40px auto",
          background: "#fff",
          borderRadius: 18,
          padding: "38px 30px",
          boxShadow: "0 2px 18px #2557fa18",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2557fa", fontWeight: 800, marginBottom: 18 }}>Contact Us</h2>
        <p style={{ marginBottom: 28, color: "#a300ff", fontSize: "1.13rem" }}>
          Questions or ideas? Interested in volunteering? <br /> We would love to hear from you.
        </p>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: "100%", padding: 12, marginBottom: 15, borderRadius: 8, border: "1px solid #d2d2d2", fontSize: "1rem"
            }}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              width: "100%", padding: 12, marginBottom: 15, borderRadius: 8, border: "1px solid #d2d2d2", fontSize: "1rem"
            }}
            required
          />
          <textarea
            placeholder="How can we help you?"
            style={{
              width: "100%", padding: 12, minHeight: 70, marginBottom: 18, borderRadius: 8, border: "1px solid #d2d2d2", fontSize: "1rem"
            }}
            required
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #2557fa, #ff4bc8)",
              color: "#fff",
              padding: "12px 36px",
              border: "none",
              borderRadius: 30,
              fontWeight: 700,
              fontSize: "1.08rem",
              cursor: "pointer",
              boxShadow: "0 2px 12px #2557fa22",
              marginTop: 6,
            }}
          >
            Send Message
          </button>
        </form>
      </section>
      <DonateBanner message="Can't donate? Help by sharing our mission or volunteering!" />
    </div>
  );
}