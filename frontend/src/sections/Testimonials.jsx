import React, { useEffect, useState } from "react";

// 50 fun and simple testimonials!
const testimonialData = [
  { text: "Gave a little, felt a lot!", author: "Sam" },
  { text: "My coffee money helped a school. Sweet!", author: "Jess" },
  { text: "Clicked donate, changed a life. Easy!", author: "Zara" },
  { text: "This site is like a hug to the world.", author: "Ben" },
  { text: "Even my grandma could use Heavenly!", author: "Ava" },
  { text: "Smiles all around after donating.", author: "Mia" },
  { text: "I met new friends by giving. Win-win!", author: "Ollie" },
  { text: "Fundraisers here are super cool.", author: "Tina" },
  { text: "Donating feels like magic.", author: "Leo" },
  { text: "I gave once. Now I can’t stop!", author: "Nia" },
  { text: "I made a difference from my sofa.", author: "Raj" },
  { text: "Big hearts, easy clicks.", author: "Sue" },
  { text: "The world needs more Heavenly!", author: "Max" },
  { text: "So simple, even my dog could donate.", author: "Luca" },
  { text: "Kindness looks good on you.", author: "Liv" },
  { text: "Fast, fun, and full of hope.", author: "Finn" },
  { text: "Helped a cause, got a smile.", author: "Ana" },
  { text: "Donating here is my happy place.", author: "Ali" },
  { text: "This site is a kindness machine.", author: "Ella" },
  { text: "My small gift made a big wave!", author: "Jay" },
  { text: "Giving feels like a party for good.", author: "Toby" },
  { text: "Did a good deed before breakfast.", author: "Mo" },
  { text: "Heavenly is good vibes only.", author: "Bea" },
  { text: "Donate and dance! That’s my rule.", author: "Izzy" },
  { text: "I smile every time I donate.", author: "Hugo" },
  { text: "The donate button is my new BFF.", author: "Kai" },
  { text: "It’s like a high five for humanity.", author: "Jude" },
  { text: "I gave, I grinned, I’m grateful.", author: "Pia" },
  { text: "Kindness is cool…and so is this site!", author: "Logan" },
  { text: "I brag about this site to my cat.", author: "Sage" },
  { text: "Generosity has never been this fun.", author: "Rory" },
  { text: "One click, big impact!", author: "Sky" },
  { text: "I donate and my heart does a happy dance.", author: "Nate" },
  { text: "This site is pure sunshine.", author: "Dani" },
  { text: "Giving here is my new hobby.", author: "Eli" },
  { text: "My piggy bank approves!", author: "Mimi" },
  { text: "Donating here is better than pizza.", author: "Vee" },
  { text: "It’s like gifting the world a smile.", author: "Wren" },
  { text: "I feel like a superhero every time.", author: "Ash" },
  { text: "Best place to make someone’s day!", author: "Sol" },
  { text: "Nice people, nice causes, nice site!", author: "Remy" },
  { text: "Sharing is caring. Heavenly makes it easy!", author: "Gus" },
  { text: "I help from my phone in my pajamas!", author: "Joss" },
  { text: "Every click makes me happier.", author: "Kim" },
  { text: "Who knew being nice was this fun?", author: "Pax" },
  { text: "Donating here brightens my week.", author: "Lyn" },
  { text: "I donated while waiting for my coffee.", author: "Day" },
  { text: "Giving is my new superpower.", author: "Tess" },
  { text: "I love seeing how many people care.", author: "Beck" },
  { text: "This site is a rainbow after rain.", author: "Sonny" },
];

// FeaturedCauses background images
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

const ROTATE_EVERY = 4000; // 4 seconds

export default function Testimonials() {
  const [startIdx, setStartIdx] = useState(0);
  const [bgIdx, setBgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 2) % testimonialData.length);
      setBgIdx((prev) => (prev + 1) % calamityBackgroundImages.length);
    }, ROTATE_EVERY);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonialData[startIdx],
    testimonialData[(startIdx + 1) % testimonialData.length],
  ];

  return (
    <section
      style={{
        padding: "40px 0",
        background: `url(${calamityBackgroundImages[bgIdx]}) center/cover no-repeat fixed`,
        textAlign: "center",
        color: "#fff",
        minHeight: 260,
        position: "relative",
        transition: "background-image 1s",
      }}
    >
      {/* No overlay: background is fully visible */}
      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: 20,
            color: "#fff",
            textShadow: "2px 3px 12px #0008"
          }}
        >
          Testimonials
        </h2>
        <p
          style={{
            fontSize: "1.15rem",
            color: "#ffe1fa",
            marginBottom: 32,
            textShadow: "1px 2px 10px #0006"
          }}
        >
          What our friends say!
        </p>
        <div
          style={{
            display: "flex",
            gap: 32,
            justifyContent: "center",
            flexWrap: "wrap",
            transition: "opacity 0.7s",
          }}
        >
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                background:
                  idx % 2 === 0
                    ? "rgba(255,255,255,0.87)"
                    : "rgba(255,255,255,0.76)",
                borderRadius: "18px",
                boxShadow: "0 2px 16px #ff4bc822",
                padding: "22px 28px",
                minWidth: 200,
                maxWidth: 260,
                color: "#2557fa",
                fontSize: "1.12rem",
                opacity: 0.96,
                transition: "background 0.6s",
                backdropFilter: "blur(1.5px)",
              }}
            >
              <p style={{ fontStyle: "italic", marginBottom: 12 }}>
                "{t.text}"
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  color: idx % 2 === 0 ? "#a300ff" : "#2557fa",
                  marginTop: 5,
                  fontSize: "1rem",
                }}
              >
                – {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}