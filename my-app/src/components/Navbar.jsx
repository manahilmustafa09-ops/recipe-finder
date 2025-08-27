import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-green-700 border-b-2 border-green-700 pb-1"
      : "hover:text-green-700";

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-green-700">
        <Link to="/">RecipeFinder</Link>
      </h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className={linkClass("/")}>
          <Link to="/">Home</Link>
        </li>
        <li className={linkClass("/recipes")}>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li className={linkClass("/favorites")}>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
