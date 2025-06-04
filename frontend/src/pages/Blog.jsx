export default function Blog() {
  return (
    <section className="max-w-3xl mx-auto my-12 px-4 bg-white rounded-lg shadow p-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Blog</h2>
      <article className="mb-8">
        <h3 className="text-xl font-semibold text-blue-900">How to Run a Successful Fundraiser</h3>
        <p>Tips and tricks from top campaign creators...</p>
      </article>
      <article>
        <h3 className="text-xl font-semibold text-blue-900">Impact Stories: Donors Making a Difference</h3>
        <p>Read how your donations are changing lives...</p>
      </article>
    </section>
  );
}