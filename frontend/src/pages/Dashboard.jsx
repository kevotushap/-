export default function Dashboard() {
  return (
    <section className="max-w-2xl mx-auto my-12 px-4 bg-white rounded-lg shadow p-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">My Dashboard</h2>
      <p className="mb-8">Here you can track your causes, donations, and impact.</p>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-blue-900">3</div>
          <div className="text-gray-700">Active Causes</div>
        </div>
        <div className="bg-yellow-100 rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-yellow-600">$600</div>
          <div className="text-gray-700">Total Donated</div>
        </div>
      </div>
    </section>
  );
}