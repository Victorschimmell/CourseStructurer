import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Bind to the port specified by Render's PORT environment variable or default to 4000
const port = process.env.PORT || 4000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint example
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Serve the frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
