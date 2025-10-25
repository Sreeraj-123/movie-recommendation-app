export const getPopularMovies = async () => {
    const response = await fetch('http://localhost:5000/api/movies/popular');
    const data = await response.json();
    return data;
};

export const searchMovies = async (query) => {
    const response = await fetch(`http://localhost:5000/api/movies/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data;
};

