require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

// Endpoint for popular movies
app.get('/api/movies/popular', async (req, res) => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        res.json(data.results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch popular movies' });
    }
});

// Endpoint for searching movies
app.get('/api/movies/search', async (req, res) => {
    try {
        const query = req.query.q;
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        res.json(data.results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to search movies' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
