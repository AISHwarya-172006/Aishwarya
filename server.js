const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple schema for bus
const BusSchema = new mongoose.Schema({
  busNumber: String,
  route: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
});

const Bus = mongoose.model('Bus', BusSchema);

// Create API endpoints
app.get('/buses', async (req, res) => {
  const buses = await Bus.find();
  res.json(buses);
});

app.post('/buses', async (req, res) => {
  const newBus = new Bus(req.body);
  await newBus.save();
  res.json(newBus);3
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
