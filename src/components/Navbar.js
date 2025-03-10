import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar
      className="p-4 text-white shadow-md bg-gradient-to-r from-blue-500 to-indigo-600"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-2xl font-semibold tracking-wide text-white">
          Admin Movies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex space-x-6 ms-auto">
            <Nav.Item>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-300 text-white no-underline ${isActive ? "bg-pink-500 text-blue-600 shadow-md" : "hover:bg-blue-700"
                  }`
                }
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/create"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-300 text-white no-underline ${isActive ? "bg-pink-500 text-blue-600 shadow-md" : "hover:bg-blue-700"
                  }`
                }
              >
                Create
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/update"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-300 text-white no-underline ${isActive ? "bg-pink-500 text-blue-600 shadow-md" : "hover:bg-blue-700"
                  }`
                }
              >
                Update
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/delete"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-300 text-white no-underline ${isActive ? "bg-pink-500 text-blue-600 shadow-md" : "hover:bg-blue-700"
                  }`
                }
              >
                Delete
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;