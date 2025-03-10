import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function Search({ movies, setFilteredMovies }) {
  const searchMovies = (movies, searchTerm) => {
    return searchTerm
      ? movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : movies;
  };

  return (
    <div className="flex justify-center my-4">
      <InputGroup className="w-50">
        <Form.Control
          type="text"
          placeholder="Search movies"
          className="p-2 border border-gray-400 rounded-lg"
          onChange={(e) => {
            setFilteredMovies(searchMovies(movies, e.target.value));
          }}
        />
      </InputGroup>
    </div>
  );
}

export default Search;
