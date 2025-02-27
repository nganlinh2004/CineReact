import React, { useState } from "react";
import movies from "../movies";
import { Link } from "react-router-dom";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import CreateMovie from "../pages/CreatePage"; // Import CreateMovie

const styles = {
  card: {
    borderRadius: "16px",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "black",
    border: "1px solid transparent",
    position: "relative",
    zIndex: 20,
    padding: "16px",
    color: "white",
    display: "grid",
    gridTemplateRows: "1fr 3.5rem 5rem",
  },
  cardImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "12px",
    textAlign: "center",
  },
};

const MovieCards = () => {
  const [renderMovies, setRenderMovies] = useState(movies);
  const [showForm, setShowForm] = useState(false); // Trạng thái hiển thị form
  const [searchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const searchMovies = (movies, searchTerm) => {
    return searchTerm
      ? movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : movies;
  };

  // Lấy danh sách thể loại từ movies
  const genres = ["All", ...new Set(movies.flatMap((movie) => movie.genre))];

  // Hàm tìm kiếm và lọc theo thể loại
  const searchAndFilterMovies = (movies, searchTerm, selectedGenre) => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesGenre =
        selectedGenre === "All" ||
        movie.genre.some((genre) =>
          genre.toLowerCase().includes(selectedGenre.toLowerCase())
        );

      return matchesSearch && matchesGenre;
    });
  };

  // Cập nhật danh sách phim mỗi khi searchTerm hoặc selectedGenre thay đổi
  React.useEffect(() => {
    setRenderMovies(searchAndFilterMovies(movies, searchTerm, selectedGenre));
  }, [searchTerm, selectedGenre]);

  const handleAddMovie = (newMovie) => {
    setRenderMovies([...renderMovies, newMovie]); // Cập nhật danh sách phim
    setShowForm(false); // Đóng form sau khi thêm
  };

  const handleUpdateMovie = (id) => {
    const movieToUpdate = renderMovies.find((movie) => movie.id === id);
    if (!movieToUpdate) return;
  
    const updatedTitle = prompt("Enter new title:", movieToUpdate.title);
    const updatedGenre = prompt("Enter new genre:", movieToUpdate.genre.join(", "));
  
    if (updatedTitle && updatedGenre) {
      const updatedMovies = renderMovies.map((movie) =>
        movie.id === id
          ? { ...movie, title: updatedTitle, genre: updatedGenre.split(", ").map(g => g.trim()) }
          : movie
      );
  
      setRenderMovies(updatedMovies);
    }
  };

  const handleDeleteMovie = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      const updatedMovies = renderMovies.filter((movie) => movie.id !== id);
      setRenderMovies(updatedMovies);
    }
  };

  return (
    <div>
      {/* Nút mở form CreateMovie */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? "Close" : "Add New Movie"}
        </button>
      </div>

      {/* Hiển thị Form CreateMovie */}
      {showForm && <CreateMovie onAddMovie={handleAddMovie} />}

      {/* Search */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <input
          type="text"
          placeholder="Search movies"
          style={{
            width: "40%",
            padding: "8px",
            borderRadius: "12px",
            border: "1px solid #1f2937",
            marginBottom: "16px",
          }}
          onChange={(e) => {
            setRenderMovies(searchMovies(movies, e.target.value));
          }}
        />

        {/* Dropdown chọn thể loại */}
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "12px",
            border: "1px solid #1f2937",
            marginBottom: "16px",
          }}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Display Movies */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {renderMovies.map((movie) => {
          return (
            <div style={styles.card} key={movie.id}>
              <img
                style={styles.cardImage}
                src={`/images/${movie.image}`}
                alt={movie.title}
              />
              <h2 style={styles.cardTitle}>{movie.title}</h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                }}
              >
                <Link className="w-full" to={`/movies/${movie.id}`}>
                  <div className="h-10 w-full mt-4 overflow-hidden relative rounded-xl px-6 py-2 bg-black dark:bg-white dark:text-black text-white flex justify-center items-end group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-52 text-center transition duration-500">
                      View Details
                    </span>
                    <div className="-translate-x-52 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                      🍿
                    </div>
                  </div>
                </Link>
              </div>
{/* Nút Update */}
<button
  onClick={() => handleUpdateMovie(movie.id)}
  className="w-full bg-yellow-500 text-white py-2 mt-4 rounded-xl hover:bg-yellow-600 flex items-center justify-center"
>
  <IconEdit className="mr-2" /> Update
</button>
              {/* Nút Delete */}
              <button
                onClick={() => handleDeleteMovie(movie.id)}
                className="w-full bg-red-500 text-white py-2 mt-4 rounded-xl hover:bg-red-600 flex items-center justify-center"
              >
                <IconTrash className="mr-2" /> Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCards;
