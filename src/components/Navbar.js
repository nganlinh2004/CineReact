import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          MyApp
        </Link>
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? "bg-white text-blue-600 shadow-md" : "hover:bg-blue-700"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? "bg-white text-blue-600 shadow-md" : "hover:bg-blue-700"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? "bg-white text-blue-600 shadow-md" : "hover:bg-blue-700"}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
