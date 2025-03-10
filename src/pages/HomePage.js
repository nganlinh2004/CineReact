import React, { useState } from "react";
import MovieList from "../components/Item";
import Search from "../components/Search";
import CreateMovie from "./CreatePage";
import moviesData from "../movies";

function Home() {
  // Mảng gốc lưu tất cả phim
  const [movies, setMovies] = useState(moviesData);

  // Mảng hiển thị sau khi tìm kiếm
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  const [showForm, setShowForm] = useState(false);

  // Thêm phim mới
  const addMovie = (newMovie) => {
    const createMovies = [...movies, newMovie];
    setMovies(createMovies);
    setShowForm(false);
  };

  return (
    <div className="container">
      {/* Nút mở form thêm phim */}
      <div className="my-4 text-center">
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          {showForm ? "Close Form" : "Add New Movie"}
        </button>
      </div>

      {/* Form tạo phim */}
      {showForm && <CreateMovie onAddMovie={addMovie} />}

      {/* Component Tìm kiếm */}
      <Search movies={movies} setFilteredMovies={setFilteredMovies} />

      {/* Hiển thị danh sách phim */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default Home;
