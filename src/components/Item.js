import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col, Pagination } from "react-bootstrap";

function MovieCard({ movie, handleUpdateMovie, handleDeleteMovie }) {
  return (
    <div>
      {/* Display Movies */}
      <Card className="p-3 text-white bg-black border border-gray-700 rounded-3xl h-100 d-flex flex-column min-h-[500px]">
        <div className="w-full aspect-[2/3] overflow-hidden rounded-lg">
          <Card.Img className="object-cover w-full h-full" variant="top" src={`/images/${movie.image}`} alt={movie.title} />
        </div>
        <Card.Body className="flex justify-between flex-column flex-grow-1">
          <Card.Title className="text-xl font-bold text-center w-full max-w-[250px] mx-auto text-ellipsis overflow-hidden whitespace-nowrap">{movie.title}</Card.Title>
          <div className="mt-auto">
            <Link className="w-full no-underline" to={`/movies/${movie.id}`}>
              <div className="relative flex items-end justify-center w-full h-10 px-6 py-2 mt-4 overflow-hidden text-white bg-white rounded-xl group">
                <span className="text-center text-black transition duration-500 group-hover:translate-x-52">
                  View Details
                </span>
                <div className="absolute inset-0 z-20 flex items-center justify-center text-white transition duration-500 -translate-x-52 group-hover:translate-x-0">
                  🍿
                </div>
              </div>
            </Link>
          </div>
          <Button
            onClick={() => handleUpdateMovie(movie.id)}
            variant="warning"
            className="flex items-center justify-center w-full mt-3"
          >
            Update 📝
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDeleteMovie(movie.id)}
            className="w-full mt-3"
          >
            Delete 🗑
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

function MovieList({ movies }) {
  const moviesPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Container>
      <Row className="g-4">
        {currentMovies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard
              movie={movie}
            // handleUpdateMovie={handleUpdateMovie}
            // handleDeleteMovie={handleDeleteMovie}
            />
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div className="mt-4 d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {Array.from({ length: totalPages }, (_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </Container>
  );
};

export default MovieList;
