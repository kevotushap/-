import DonateBanner from "../components/DonateBanner";

// You should fetch real data, this is a demo
const dummyCause = {
  title: "Clean Water for All",
  description: "1 in 10 people lack clean water. Your gift builds wells and changes lives.",
  image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  raised: 3800,
  goal: 5000,
};

export default function CauseDetail() {
  const { title, description, image, raised, goal } = dummyCause;
  const percent = Math.min(100, Math.round((raised / goal) * 100));

  return (
    <div>
      <DonateBanner message={`Help "${title}" reach its goal. Every gift counts!`} />
      <section
        style={{
          background: "#fff",
          borderRadius: 16,
          maxWidth: 700,
          margin: "32px auto",
          padding: 32,
          boxShadow: "0 2px 18px #2557fa18",
          textAlign: "center",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxWidth: 340,
            borderRadius: 14,
            margin: "0 auto 24px auto",
            display: "block",
            objectFit: "cover",
            boxShadow: "0 2px 20px #2557fa22",
          }}
        />
        <h2 style={{ fontWeight: 800, color: "#2557fa", fontSize: "2rem" }}>{title}</h2>
        <p style={{ fontSize: "1.13rem", margin: "18px 0 28px 0" }}>{description}</p>
        <div style={{ margin: "24px 0" }}>
          <div style={{
            background: "#f7e2ff",
            borderRadius: 16,
            height: 24,
            width: "100%",
            maxWidth: 420,
            margin: "0 auto",
            overflow: "hidden",
            boxShadow: "0 2px 8px #ff4bc822",
          }}>
            <div
              style={{
                width: `${percent}%`,
                height: "100%",
                background: "linear-gradient(90deg, #2557fa, #ff4bc8)",
                transition: "width 0.5s",
              }}
            />
          </div>
          <div style={{ marginTop: 12, fontWeight: 600 }}>
            ${raised} raised of ${goal} goal ({percent}%)
          </div>
        </div>
        <a
          href="/causes"
          style={{
            background: "#ff4bc8",
            color: "#fff",
            padding: "13px 38px",
            borderRadius: 30,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.12rem",
            display: "inline-block",
            marginTop: 18,
          }}
        >
          Donate Now
        </a>
        <div style={{ marginTop: 24 }}>
          <button
            style={{
              background: "#2557fa",
              color: "#fff",
              border: "none",
              borderRadius: 18,
              padding: "10px 28px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 2px 12px #2557fa22",
            }}
            onClick={() => window.navigator.share
              ? window.navigator.share({
                  title: "Support a Cause!",
                  text: `Join me in supporting "${title}".`,
                  url: window.location.href
                })
              : alert("Copy and share this link: " + window.location.href)
            }
          >
            Share This Cause
          </button>
        </div>
      </section>
    </div>
  );
}