const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const alarmRoutes = require('./routes/alarms');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'https://omnitrix.live' // Change '*' to your frontend URL in production
}));
app.use(express.json());

// Routes
app.use('/alarms', alarmRoutes);

// Root endpoint
app.get('/', (req, res) => res.send('Omnitrix Backend is running...'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
