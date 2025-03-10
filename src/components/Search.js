import React, { useState, useEffect } from "react";

function Search({ movies, setFilteredMovies }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredMovies(filtered);
  }, [searchTerm, movies]); 

  return (
    <div className="mb-4 d-flex justify-content-center">
      <input
        type="text"
        placeholder="Search movies..."
        className="p-2 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
