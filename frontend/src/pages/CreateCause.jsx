import DonateBanner from "../components/DonateBanner";

export default function CreateCause() {
  return (
    <section
      style={{
        background: "#fff",
        borderRadius: 18,
        maxWidth: 620,
        margin: "38px auto",
        padding: "36px 26px",
        boxShadow: "0 2px 18px #ff4bc822",
      }}
    >
      <DonateBanner message="Start a cause and inspire others to give. Every big change begins with one idea!" />
      <h2 style={{ fontWeight: 800, color: "#2557fa", marginBottom: 20 }}>Create a New Cause</h2>
      <p style={{ marginBottom: 30, color: "#a300ff", fontSize: "1.13rem" }}>
        Fill out the form below to launch your own campaign. Tell your story, set a goal, and invite the world to help you make a difference!
      </p>
      <form>
        <input
          type="text"
          placeholder="Cause Title"
          style={{
            width: "100%", padding: 12, marginBottom: 18, borderRadius: 8, border: "1px solid #d2d2d2", fontSize: "1rem"
          }}
          required
        />
        <textarea
          placeholder="Describe your cause and who it will help..."
          style={{
            width: "100%", padding: 12, minHeight: 90, marginBottom: 18, borderRadius: 8, border: "1px solid #d2d2d2", fontSize: "1rem"
          }}
          required
        />
        <input
          type="number"
          placeholder="Fundraising Goal (USD)"
          style={{
            width: "100%", padding: 12, marginBottom: 18, borderRadius: 8, border: "1px solid #d2d2d2", fontSize: "1rem"
          }}
          required
        />
        <input
          type="url"
          placeholder="Image URL (optional)"
          style={{
            width: "100%", padding: 12, marginBottom: 24, borderRadius: 8, border: "1px solid #d2d2d2", fontSize: "1rem"
          }}
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
          Create Cause
        </button>
      </form>
    </section>
  );
}