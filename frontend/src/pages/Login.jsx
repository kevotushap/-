export default function Login() {
  return (
    <section className="max-w-md mx-auto my-12 px-4 bg-white rounded-lg shadow p-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Login</h2>
      <form>
        <label className="block mb-4">
          Email
          <input type="email" name="email" required className="w-full rounded border-gray-300 px-3 py-2 mt-1" />
        </label>
        <label className="block mb-4">
          Password
          <input type="password" name="password" required className="w-full rounded border-gray-300 px-3 py-2 mt-1" />
        </label>
        <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition" type="submit">Login</button>
      </form>
    </section>
  );
}