import DonateBanner from "../components/DonateBanner";
import FeaturedCauses from "../sections/FeaturedCauses";
import Blog from "./Blog";

export default function BrowseCauses() {
  return (
    <div>
      <DonateBanner message="Find your cause. Your gift can change a life forever!" />
      <section style={{ textAlign: "center", margin: "32px 0" }}>
        <h2>Our Causes</h2>
        <p style={{ fontSize: "1.13rem", color: "#2557fa" }}>
          Discover amazing campaigns you can support today.
        </p>
      </section>
      <FeaturedCauses />
      <section style={{ margin: "38px 0", textAlign: "center" }}>
        <h3>Can't find your cause?</h3>
        <p>
          <a href="/create" style={{ color: "#ff4bc8", fontWeight: 600, textDecoration: "underline" }}>
            Start your own campaign!
          </a>
        </p>
      </section>
      <section style={{ margin: "48px 0 0 0" }}>
        <Blog />
      </section>
    </div>
  );
}