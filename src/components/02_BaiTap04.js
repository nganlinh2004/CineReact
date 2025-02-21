import React from "react";

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
    gridTemplateRows: "10rem auto auto auto",
  },
  cardImage: {
    height: "10rem",
    width: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "12px",
  },
  cardDescription: {
    marginTop: "8px",
    color: "#a1a1aa",
    lineHeight: "1.5",
    fontSize: "0.875rem",
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
};

const MovieCards = ({ movies }) => {
  const [renderMovies, setRenderMovies] = React.useState(movies);
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Popular Movies</h1>
      <div style={{display:"flex", justifyContent:"center"}}>
        <input type="text" placeholder="Search movies" style={{ width: "40%", padding: "8px", borderRadius: "12px", border: "1px solid #1f2937", marginBottom: "16px" }} 
        onChange={(e)=>{setRenderMovies(searchMovies(movies,e.target.value))}} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
        {renderMovies.map((movie) => {
          return (
            <div style={styles.card} key={movie.id}>
              <img style={styles.cardImage} src={`/images/${movie.image}`} alt={movie.title} />
              <h2 style={styles.cardTitle}>{movie.title}</h2>
              <p style={styles.cardDescription}>{movie.description}</p>
              <div style={styles.movieDetails}>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Release Year:</strong> {movie.releaseYear}</p>
                <p><strong>Duration:</strong> {movie.duration} minutes</p>
                <p><strong>Box Office:</strong> {movie.boxOffice}</p>
              </div>
              <div style={{ display: "flex", alignItems: "end"}}>
                <div style={styles.cardButton}>Watch Now</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    
  );
};

const searchMovies = (movies,searchTerm) => {
  const filteredMovies = searchTerm
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : movies;
  console.log(filteredMovies);
  
  return filteredMovies;
}

export default MovieCards;
