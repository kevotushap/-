import DonateBanner from "../components/DonateBanner";

export default function About() {
  return (
    <div>
      <header
        style={{
          background: "linear-gradient(90deg, #2557fa 0%, #ff4bc8 100%)",
          color: "#fff",
          padding: "56px 0 32px 0",
          textAlign: "center",
          borderRadius: "0 0 30px 30px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 12 }}>
          About Us
        </h1>
        <p style={{ fontSize: "1.25rem", maxWidth: 630, margin: "0 auto" }}>
          Built by people who care deeply about making a difference, we believe in a world where generosity is accessible to all.
        </p>
      </header>
      <section style={{ maxWidth: 800, margin: "40px auto", background: "#fff", borderRadius: 18, padding: "38px 26px", boxShadow: "0 2px 20px #2557fa15" }}>
        <h2 style={{ color: "#2557fa", fontWeight: 800, marginBottom: 18, fontSize: "2rem" }}>
          Our Mission
        </h2>
        <p style={{ fontSize: "1.16rem", color: "#333", marginBottom: 28 }}>
          Our mission is to empower people and communities to make a positive impact—without barriers, hidden fees, or corporate interests. We’re here to amplify generosity, enabling every donation to go further and do more good in the world.
        </p>
        <h2 style={{ color: "#ff4bc8", fontWeight: 800, marginBottom: 18, fontSize: "1.6rem" }}>
          Why We Exist
        </h2>
        <p style={{ fontSize: "1.12rem", color: "#333", marginBottom: 24 }}>
          Too often, those wanting to help are discouraged by complicated processes and unnecessary costs. We are changing that. Our platform was created to remove obstacles and empower everyone—from individuals to organizations—to support the causes they care about.
        </p>
        <h2 style={{ color: "#2557fa", fontWeight: 800, marginBottom: 18, fontSize: "1.6rem" }}>
          What Makes Us Different
        </h2>
        <ul style={{ fontSize: "1.12rem", color: "#333", paddingLeft: 22, marginBottom: 28 }}>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: "#ff4bc8" }}>Zero Platform Fees:</strong> Every cent you give goes directly to the cause.
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: "#2557fa" }}>Community-Focused:</strong> We were founded by people who believe in collective action and the power of community support.
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: "#ff4bc8" }}>Transparency:</strong> You see the real impact of your generosity.
          </li>
          <li>
            <strong style={{ color: "#2557fa" }}>Innovation for Good:</strong> We use technology to break down barriers and bring people together for causes that matter.
          </li>
        </ul>
        <h2 style={{ color: "#ff4bc8", fontWeight: 800, marginBottom: 18, fontSize: "1.6rem" }}>
          Join Us
        </h2>
        <p style={{ fontSize: "1.12rem", color: "#333", marginBottom: 18 }}>
          We believe generosity should be easy, direct, and impactful. Whether you are starting a cause, supporting one, or simply spreading the word, you are part of a movement that’s changing lives for the better.
        </p>
      </section>
      <DonateBanner message="Be part of a generosity revolution—explore and support a cause today!" />
    </div>
  );
}