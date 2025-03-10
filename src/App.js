import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateMovie from "./pages/CreatePage";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container p-4 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetail></MovieDetail>} />
          <Route path="/create" element={<CreateMovie></CreateMovie>} />
          <Route path="/update" />
          <Route path="/delete" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;