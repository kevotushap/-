import React, { useRef } from "react";

// Use Unsplash image URLs for real images:
const causesData = [
  {
    title: "Clean Water for All",
    description: "Help bring sustainable clean water to rural villages.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #0bd3d3 100%)",
  },
  {
    title: "Education for Every Child",
    description: "Support learning opportunities for children worldwide.",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #f9b16e 100%)",
  },
  {
    title: "Emergency Relief Fund",
    description: "Provide immediate assistance to families in crisis.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #f75c5c 100%)",
  },
  {
    title: "Meals for Children",
    description: "Provide daily nutritious meals to underprivileged children.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #ffd86e 100%)",
  },
  {
    title: "Disaster Recovery",
    description: "Restore lives and homes after natural disasters.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #5c86f7 100%)",
  },
  {
    title: "Medical Outreach",
    description: "Bring healthcare to remote and marginalized communities.",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #a300ff 100%)",
  },
  {
    title: "Shelter for All",
    description: "Build safe homes for the homeless.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #4bc8ff 100%)",
  },
  {
    title: "End Hunger Now",
    description: "Join us in the fight against hunger.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #ff4bc8 100%)",
  },
  {
    title: "Empower Women",
    description: "Help women achieve financial independence.",
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #f7a1e4 100%)",
  },
  {
    title: "Protect Wildlife",
    description: "Support wildlife conservation and rescue.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #7be495 100%)",
  },
  {
    title: "Senior Care",
    description: "Enhance the lives of the elderly.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #f7c97b 100%)",
  },
  {
    title: "Support Orphans",
    description: "Give orphans a home and a future.",
    image: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #be95c4 100%)",
  },
  {
    title: "Green Earth",
    description: "Plant trees and restore natural habitats.",
    image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #7bdff2 100%)",
  },
  {
    title: "Access to Technology",
    description: "Provide devices and training to youth.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #8eecf5 100%)",
  },
  {
    title: "Mental Health Matters",
    description: "Promote mental health awareness and support.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #b388ff 100%)",
  },
  {
    title: "War Refugee Aid",
    description: "Assist families fleeing conflict and war.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #ffb3b3 100%)",
  },
  {
    title: "Disability Inclusion",
    description: "Empower people living with disabilities.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #abe9cd 100%)",
  },
  {
    title: "Animal Rescue",
    description: "Save abandoned and abused animals.",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #f7b2b7 100%)",
  },
  {
    title: "Fight Child Labor",
    description: "Protect children from exploitation.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #ffc6ff 100%)",
  },
  {
    title: "Arts for All",
    description: "Support creativity in disadvantaged communities.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    color: "linear-gradient(120deg, #fff 60%, #f9e79f 100%)",
  },
];

export default function FeaturedCauses() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="featured-causes"
      style={{
        padding: "50px 0 70px 0",
        background: "linear-gradient(135deg, #f9f9f9 0%, #f7e2ff 100%)",
        textAlign: "center",
        color: "#1a2330",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1050, margin: "0 auto", position: "relative" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: 20, color: "#2557fa" }}>
          Featured Causes
        </h2>
        <p style={{ fontSize: "1.15rem", color: "#a300ff", marginBottom: 32 }}>
          Explore some of the most impactful fundraising campaigns currently making a difference.
        </p>
        {/* Swiper controls */}
        <button
          aria-label="Scroll left"
          onClick={() => scroll(-300)}
          style={{
            position: "absolute",
            left: -15,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "linear-gradient(135deg, #2557fa 0%, #ff4bc8 100%)",
            border: "none",
            color: "#fff",
            borderRadius: "50%",
            width: 40,
            height: 40,
            cursor: "pointer",
            fontSize: 22,
            boxShadow: "0 2px 10px #a300ff22",
            outline: "none",
          }}
        >
          &#8592;
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scroll(300)}
          style={{
            position: "absolute",
            right: -15,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "linear-gradient(135deg, #2557fa 0%, #ff4bc8 100%)",
            border: "none",
            color: "#fff",
            borderRadius: "50%",
            width: 40,
            height: 40,
            cursor: "pointer",
            fontSize: 22,
            boxShadow: "0 2px 10px #a300ff22",
            outline: "none",
          }}
        >
          &#8594;
        </button>
        {/* Swiper */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: 28,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: 12,
            paddingTop: 10,
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {causesData.map((cause, idx) => (
            <div
              key={idx}
              style={{
                background: cause.color,
                borderRadius: "24px",
                boxShadow: "0 2px 16px #2557fa11, 0 6px 30px #ff4bc81a",
                padding: "18px 18px 22px 18px",
                minWidth: 240,
                maxWidth: 260,
                flex: "0 0 240px",
                color: "#222",
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.2s, box-shadow 0.2s",
                border: "2px solid #fff",
              }}
            >
              <img
                src={cause.image}
                alt={cause.title}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "14px",
                  objectFit: "cover",
                  marginBottom: 16,
                  boxShadow: "0 2px 16px #2557fa22",
                  background: "#fff",
                  border: "4px solid #fff",
                }}
              />
              <h3 style={{
                color: "#2557fa",
                fontWeight: 700,
                fontSize: "1.18rem",
                marginBottom: 10,
                marginTop: 0,
              }}>{cause.title}</h3>
              <p style={{
                color: "#a300ff",
                fontSize: "1rem",
                margin: 0,
              }}>{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Hide native scrollbar */}
      <style>{`
        #featured-causes::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}