import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    // Add logic to submit form to backend
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-blue-50">
      <form className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Register</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <input name="name" type="text" placeholder="Name" required className="w-full mb-4 border px-4 py-2 rounded" onChange={handleInput} />
        <input name="email" type="email" placeholder="Email" required className="w-full mb-4 border px-4 py-2 rounded" onChange={handleInput} />
        <input name="password" type="password" placeholder="Password" required className="w-full mb-4 border px-4 py-2 rounded" onChange={handleInput} />
        <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800">Register</button>
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <a href="/login" className="text-blue-700 underline">Login</a>
        </div>
      </form>
    </section>
  );
}