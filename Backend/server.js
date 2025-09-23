// server.js

require('dotenv').config();
const app = require('./src/app');

// Use the PORT from the .env file, or default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});