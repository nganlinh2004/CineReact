import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetail></MovieDetail>} />
          <Route path="/create"/>
          <Route path="/update"/>
          <Route path="/delete"/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;