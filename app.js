const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {console.log("Database connected successfully")})
.catch((err) => {console.log(err)})

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/mentors', require('./routes/mentors'));
app.use('/api/students', require('./routes/students'));
app.use('/api/bookings', require('./routes/bookings'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
