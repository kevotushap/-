import { useState } from "react";

// Utility to get a random author name
function getRandomAuthor() {
  const names = [
    "Sophia Kim",
    "Liam Patel",
    "Ava Chen",
    "Noah Smith",
    "Emma Rodriguez",
    "Mia Okeke",
    "Elijah Brown",
    "Lucas Ivanov",
    "Olivia Park",
    "Ethan Dubois",
    "Amelia Rossi",
    "Mateo Silva",
    "Isabella Müller",
    "Ben Tadesse",
    "Charlotte Lee",
    "Leo Novak",
    "Zoe Williams",
    "Nina Popov",
    "Samuel Njoroge",
    "Layla Singh"
  ];
  return names[Math.floor(Math.random() * names.length)];
}

export default function Blog() {
  // Preprocess posts so that all "Admin" author fields are replaced with a random name on each render
  const initialPosts = [
    {
      title: "How Clean Water Changed Everything",
      content:
        "Thanks to your generosity, clean water reached over 1,000 people last year. See the journey and transformation...",
      link: "/causes",
      linkLabel: "Support water projects",
      author: "Admin",
    },
    {
      title: "A New Start for Aisha",
      content:
        "Aisha's family found hope thanks to your donations. Her story is one of many made possible by your support.",
      link: "/causes",
      linkLabel: "Give food security",
      author: "Admin",
    },
    {
      title: "From Hunger to Hope: Samuel’s Journey",
      content:
        "Samuel, a young boy from a remote village, used to go to bed hungry. After receiving daily meals through our program, his health and school performance improved dramatically. Today, Samuel dreams of becoming a teacher, hoping to give back to his community.",
      author: "Admin",
    },
    {
      title: "A Community Rebuilt After Disaster",
      content:
        "When floods destroyed dozens of homes, your support provided emergency shelter and supplies. Together, we helped families rebuild stronger homes and restore hope for the future.",
      author: "Admin",
    },
    {
      title: "Empowering Women, Transforming Lives",
      content:
        "Fatima started her own tailoring business after attending our skills training. She now employs three women in her village, helping them achieve financial independence and dignity.",
      author: "Admin",
    },
    {
      title: "Every Gift Matters",
      content:
        "A small donation purchased school supplies for an entire classroom. These tools have inspired children to stay in school and work toward brighter futures.",
      author: "Admin",
    },
  ].map(post =>
    post.author === "Admin"
      ? { ...post, author: getRandomAuthor() }
      : post
  );

  const [posts, setPosts] = useState(initialPosts);

  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.content && form.author) {
      setPosts([
        {
          title: form.title,
          content: form.content,
          author: form.author,
        },
        ...posts,
      ]);
      setForm({ title: "", content: "", author: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2500);
    }
  };

  return (
    <div>
      <section
        style={{
          maxWidth: 900,
          margin: "40px auto",
          background: "#fff",
          borderRadius: 24,
          padding: "48px 38px",
          boxShadow: "0 3px 24px #2557fa28",
        }}
      >
        <h2
          style={{
            color: "#2557fa",
            fontWeight: 900,
            marginBottom: 24,
            fontSize: "2.6rem",
            fontFamily: "'Montserrat', 'Arial Black', sans-serif",
            letterSpacing: "1px",
          }}
        >
          Stories of Hope
        </h2>
        <p
          style={{
            fontSize: "1.38rem",
            marginBottom: 42,
            fontFamily: "'Georgia', serif",
            color: "#333",
          }}
        >
          Read stories and updates from our community. See how your support makes a difference.
        </p>
        {posts.map((post, idx) => (
          <article
            key={idx}
            style={{
              marginBottom: 48,
              padding: "0 0 18px 0",
              borderBottom: "2px solid #f3f3f3",
              fontSize: "1.19rem",
              fontFamily: idx % 2 === 0 ? "'Georgia', serif" : "'Roboto', sans-serif",
            }}
          >
            <h3
              style={{
                color: "#ff4bc8",
                fontWeight: 800,
                fontSize: "2rem",
                fontFamily: "'Bebas Neue', 'Arial Black', cursive, sans-serif",
                marginBottom: "0.45em",
              }}
            >
              {post.title}
            </h3>
            <p
              style={{
                fontSize: "1.25rem",
                marginBottom: 10,
                lineHeight: 1.6,
                fontFamily: idx % 2 === 0 ? "'Georgia', serif" : "'Open Sans', sans-serif",
              }}
            >
              {post.content}
            </p>
            {post.link && (
              <a
                href={post.link}
                style={{
                  color: "#2557fa",
                  fontWeight: 700,
                  textDecoration: "underline",
                  fontSize: "1.1rem",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {post.linkLabel}
              </a>
            )}
            <div
              style={{
                color: "#888",
                marginTop: 12,
                fontSize: "1.08rem",
                fontFamily: "'Caveat', cursive, sans-serif",
                fontStyle: "italic",
                letterSpacing: "0.5px",
              }}
            >
              — {post.author}
            </div>
          </article>
        ))}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#f7e2ff44",
            borderRadius: 16,
            padding: 28,
            marginTop: 44,
            boxShadow: "0 2px 8px #ff4bc822",
          }}
        >
          <h3
            style={{
              color: "#ff4bc8",
              fontWeight: 800,
              marginBottom: 14,
              fontSize: "2rem",
              fontFamily: "'Montserrat', 'Arial Black', sans-serif",
            }}
          >
            Share Your Story
          </h3>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Story Title"
            style={{
              width: "100%",
              padding: 14,
              borderRadius: 10,
              border: "1.5px solid #ccc",
              marginBottom: 16,
              fontSize: "1.12rem",
              fontFamily: "'Bebas Neue', 'Arial Black', cursive, sans-serif",
              fontWeight: 600,
            }}
            required
          />
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Your story (inspiring, heartfelt, and real!)"
            rows={5}
            style={{
              width: "100%",
              padding: 14,
              borderRadius: 10,
              border: "1.5px solid #ccc",
              marginBottom: 16,
              fontSize: "1.12rem",
              fontFamily: "'Georgia', serif",
            }}
            required
          />
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: 14,
              borderRadius: 10,
              border: "1.5px solid #ccc",
              marginBottom: 18,
              fontSize: "1.08rem",
              fontFamily: "'Caveat', cursive, sans-serif",
            }}
            required
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #ff4bc8 0%, #2557fa 100%)",
              color: "#fff",
              fontWeight: 800,
              border: "none",
              borderRadius: 10,
              padding: "12px 36px",
              fontSize: "1.18rem",
              fontFamily: "'Montserrat', 'Arial Black', sans-serif",
              cursor: "pointer",
              letterSpacing: "1px",
              boxShadow: "0 2px 12px #2557fa11",
            }}
          >
            Post Story
          </button>
          {submitted && (
            <div style={{
              color: "#2557fa",
              marginTop: 14,
              fontWeight: 700,
              fontFamily: "'Roboto', sans-serif",
              fontSize: "1.15rem",
            }}>
              Thank you for sharing your story!
            </div>
          )}
        </form>
      </section>
    </div>
  );
}