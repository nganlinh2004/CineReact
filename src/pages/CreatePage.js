import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

function CreateMovie({ onAddMovie }) {
    const [movie, setMovie] = useState({
        title: "",
        genre: "",
        director: "",
        releaseYear: "",
        duration: "",
        cast: "",
        boxOffice: "",
        image: "",
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imagePath = `${file.name}`;
            setMovie((prev) => ({ ...prev, image: imagePath }));
            setImagePreview(imagePath);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!movie.title.trim() || movie.title.length < 2) {
            setError("Title must be at least 2 characters long.");
            return;
        }
        if (!movie.genre.trim()) {
            setError("Genre is required.");
            return;
        }
        if (!movie.director.trim()) {
            setError("Director is required.");
            return;
        }
        if (!movie.releaseYear || movie.releaseYear < 1900 || movie.releaseYear > new Date().getFullYear()) {
            setError(`Release year must be between 1900 and ${new Date().getFullYear()}.`);
            return;
        }
        if (movie.duration && movie.duration <= 0) {
            setError("Duration must be a positive number.");
            return;
        }
        if (movie.boxOffice && movie.boxOffice < 0) {
            setError("Box Office earnings must be a positive number.");
            return;
        }
        if (!movie.image) {
            setError("Please select an image.");
            return;
        }

        onAddMovie(movie);
        setMovie({
            title: "",
            genre: "",
            director: "",
            releaseYear: "",
            duration: "",
            cast: "",
            boxOffice: "",
            image: "",
        });
        setImagePreview(null);
    };

    return (
        <Card className="p-4 mx-auto shadow-lg" style={{ maxWidth: "500px" }}>
            <Card.Body>
                <Card.Title className="mb-4 text-center">Add New Movie</Card.Title>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="title" placeholder="Title" value={movie.title} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="genre" placeholder="Genre" value={movie.genre} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="director" placeholder="Director" value={movie.director} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="number" name="releaseYear" placeholder="Release Year" value={movie.releaseYear} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="number" name="duration" placeholder="Duration (mins)" value={movie.duration} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="cast" placeholder="Cast (comma separated)" value={movie.cast} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="boxOffice" placeholder="Box Office" value={movie.boxOffice} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                    </Form.Group>

                    {imagePreview && <img src={`/images/${imagePreview.split("/").pop()}`} alt="Movie Preview" className="object-cover w-full h-40 rounded" />}

                    <Button variant="primary" type="submit" className="w-100">Add Movie</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default CreateMovie;
