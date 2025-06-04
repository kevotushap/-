const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app (after build)
app.use(express.static(path.join(__dirname, 'client', 'build')));

// API routes here
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// All other routes serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});