import DonateBanner from "../components/DonateBanner";

export default function Dashboard() {
  return (
    <div>
      <section
        style={{
          maxWidth: 900,
          margin: "44px auto",
          background: "#fff",
          borderRadius: 18,
          padding: "36px 26px",
          boxShadow: "0 2px 18px #ff4bc822",
        }}
      >
        <h2 style={{ color: "#2557fa", fontWeight: 800, marginBottom: 18 }}>Your Dashboard</h2>
        <p style={{ marginBottom: 24, color: "#a300ff", fontSize: "1.13rem" }}>
          See your giving history, causes you support, and the difference you’re making.
        </p>
        {/* ...dashboard content here... */}
      </section>
      <DonateBanner message="Welcome back! See your impact and keep making a difference." />
    </div>
  );
}