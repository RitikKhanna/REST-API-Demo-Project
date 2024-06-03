const express = require('express');
const path = require('path');
const app = express();

// Sample data for the API
const data = {
    message: 'Hello, World!',
    author: 'ChatGPT',
    year: 2024
};

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route to render the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API route to return the sample data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
