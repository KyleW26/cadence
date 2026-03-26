export default function DashboardLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">Cadence</h1>
        </div>
        <nav className="mt-6">
          <a
            href="/dashboard"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </a>
          <a
            href="/dashboard/activities"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Activities
          </a>
          <a
            href="/dashboard/programmes"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Programmes
          </a>
          <a
            href="/dashboard/workouts"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Workouts
          </a>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
