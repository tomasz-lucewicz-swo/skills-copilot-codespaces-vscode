// Create web server
// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
    res.send('This is a comments page');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/comments');
});

// Add Post MEthod
app.post('/comments', (req, res) => {
    res.send('This is a post request');
});