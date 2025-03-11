import React, { useState } from "react";
import MovieList from "../components/Item";
import Search from "../components/Search";
import CreateMovie from "./CreatePage";
import moviesList from "../movies";

function Home() {
  const [movies, setMovies] = useState(moviesList);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showForm, setShowForm] = useState(false);

  const addMovie = (newMovie) => {
    const createMovies = [...movies, newMovie];
    setMovies(createMovies);
    setFilteredMovies(createMovies);
    setShowForm(false);
  };

  return (
    <div className="container mx-auto">
      <div className="my-4 text-center">
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          {showForm ? "Close Form" : "Add New Movie"}
        </button>
      </div>

      {showForm && <CreateMovie onAddMovie={addMovie} />}

      <Search movies={movies} setFilteredMovies={setFilteredMovies} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default Home;
