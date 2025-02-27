import { useState } from "react";

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

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = { ...movie, id: `MV${Date.now()}` }; // Tạo ID động
        onAddMovie(newMovie); // Gửi phim mới về MovieCards
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
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold text-center mb-4">Add New Movie</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="title" value={movie.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" />
                <input type="text" name="genre" value={movie.genre} onChange={handleChange} placeholder="Genre" className="w-full p-2 border rounded" />
                <input type="text" name="director" value={movie.director} onChange={handleChange} placeholder="Director" className="w-full p-2 border rounded" />
                <input type="number" name="releaseYear" value={movie.releaseYear} onChange={handleChange} placeholder="Release Year" className="w-full p-2 border rounded" />
                <input type="number" name="duration" value={movie.duration} onChange={handleChange} placeholder="Duration (minutes)" className="w-full p-2 border rounded" />
                <input type="text" name="cast" value={movie.cast} onChange={handleChange} placeholder="Cast (Comma Separated)" className="w-full p-2 border rounded" />
                <input type="text" name="boxOffice" value={movie.boxOffice} onChange={handleChange} placeholder="Box Office" className="w-full p-2 border rounded" />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Add Movie
                </button>
            </form>
        </div>
    );
}

export default CreateMovie;