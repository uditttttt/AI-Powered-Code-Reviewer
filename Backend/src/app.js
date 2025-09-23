const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// --- START: NEW CORS CONFIGURATION ---
// 1. Define the list of allowed frontend URLs
const allowedOrigins = [
  'http://localhost:5173', // Your local frontend dev server (or 3000, 5174 etc.)
  'https://ai-powered-code-reviewer-frontend-ofml.onrender.com' // IMPORTANT: Replace with your new project's Render URL
];

// 2. Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Origin is allowed
    } else {
      callback(new Error('This origin is not allowed by CORS policy')); // Origin is not allowed
    }
  },
};

// 3. Use the new secure CORS options
app.use(cors(corsOptions));
// --- END: NEW CORS CONFIGURATION ---

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app;