import React from "react";
import movies from "../movies";
import { Link } from "react-router-dom";
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
    gridTemplateRows: "10rem 5rem auto auto",
  },
  cardImage: {
    height: "10rem",
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "12px",
  },
  movieDetails: {
    marginTop: "12px",
    fontSize: "0.875rem",
    color: "#d4d4d8",
  },
  cardButton: {
    marginTop: "16px",
    padding: "8px 16px",
    height: "40px",
    borderRadius: "12px",
    backgroundColor: "#1f2937",
    color: "white",
    textAlign: "center",
    width: "100%",
    cursor: "pointer",
  },
  formContainer: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  formButton: {
    width: "100%",
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};
let Movies = movies

const MovieCards = () => {
  
  const [renderMovies, setRenderMovies] = React.useState(Movies);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = ({
      title: e.target.title.value,
      genre: e.target.genre.value.split(","),
      director: e.target.director.value,
      releaseYear: e.target.releaseYear.value,
      duration: e.target.duration.value,
      cast: e.target.cast.value.split(","),
      boxOffice: e.target.boxOffice.value,
      image: e.target.image.value,
    });

    Movies = addMovie(Movies, newMovie);
    console.log(Movies);
    setRenderMovies(Movies);
  };

  const FormAddMovie = () => {
    return (
      <div style={styles.formContainer}>
        <div>
          <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "10px" }}>Add New Movie</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input name="title" placeholder="Title" required />
            <input name="genre" placeholder="Genre (comma-separated)" required />
            <input name="director" placeholder="Director" required />
            <input name="releaseYear" type="number" placeholder="Release Year" required />
            <input name="duration" type="number" placeholder="Duration (min)" required />
            <input name="cast" placeholder="Cast (comma-separated)" required />
            <input name="boxOffice" placeholder="Box Office" required />
            <input name="image" placeholder="Image URL" required />
            <button type="submit" style={styles.formButton}>Add Movie</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Popular Movies</h1>
      <div style={{display:"flex", justifyContent:"center"}}>
        <input type="text" placeholder="Search movies" style={{ width: "40%", padding: "8px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "16px" }} 
        onChange={(e)=>{setRenderMovies(searchMovies(Movies,e.target.value))}} />
      </div>

      <FormAddMovie></FormAddMovie>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
        {renderMovies.map((movie) => {
          return (
            <div style={styles.card} key={movie.id}>
              <img style={styles.cardImage} src={`/images/${movie.image}`} alt={movie.title} />
              <h2 style={styles.cardTitle}>{movie.title}</h2>
              {/* <p style={styles.cardDescription}>{movie.description}</p> */}
              <div style={styles.movieDetails}>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Genre:</strong> {movie.genre.join(", ")}</p>
                <p><strong>Cast:</strong> {movie.cast.join(", ")}</p>
                <p><strong>Release Year:</strong> {movie.releaseYear}</p>
                <p><strong>Duration:</strong> {movie.duration} minutes</p>
                <p><strong>Box Office:</strong> {movie.boxOffice}</p>
              </div>
              <div style={{display:"flex", justifyContent:"end", alignItems:"end"}}>
                <Link className="w-full" to={`/movies/${movie.id}`}>
                  <div className="h-10 w-full mt-4 overflow-hidden relative rounded-xl px-6 py-2  bg-black dark:bg-white dark:text-black text-white flex justify-center items-end group/modal-btn">
                    <span
                      className="group-hover/modal-btn:translate-x-52 text-center transition duration-500">
                      Play now
                    </span>
                    <div
                      className=" -translate-x-52 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                      🍿
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const searchMovies = (movies,searchTerm) => {
  console.log("movies:",movies);
  
  const filteredMovies = searchTerm
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : movies;
  // console.log(filteredMovies);
  
  return filteredMovies;
}

const addMovie = (movies, newMovie) => {
  const updatedMovies = [...movies, newMovie];
  return updatedMovies;
}


export default MovieCards;
