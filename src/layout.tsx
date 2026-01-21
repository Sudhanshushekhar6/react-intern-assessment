import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `px-3 py-1 rounded transition-all duration-200
     hover:text-indigo-600 hover:bg-indigo-50
     ${pathname === path ? "text-indigo-600 font-semibold bg-indigo-100" : "text-gray-700"}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto flex gap-6 p-4 items-center">
          <h1 className="text-xl font-bold text-indigo-600">
            RecipeBook
          </h1>

          <Link to="/" className={linkClass("/")}>
            Home
          </Link>

          <Link to="/create" className={linkClass("/create")}>
            Create
          </Link>

          <Link to="/archive" className={linkClass("/archive")}>
            Archive
          </Link>
        </div>
      </nav>

      {}
      <main className="max-w-5xl mx-auto p-4 animate-in fade-in">
        <Outlet />
      </main>
    </div>
  );
}
