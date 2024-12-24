const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('MONGO_URI is not defined in the environment variables.');
  process.exit(1); // Exit the process if MongoDB URI is not defined
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Create a Job schema
const jobSchema = new mongoose.Schema({
  jobId: String,
  title: String,
  company: String,
  location: String,
  jobLink: String,
  employmentType: String,
  experience: String,
  source: String,
  country: String,
  postedDateTime: Date,
  companyImageUrl: String,
  minExp: Number,
  maxExp: Number
});

const Job = mongoose.model('Job', jobSchema);

app.get('/api/jobs', async (req, res) => {
  const { location } = req.query;
  try {
    let query = {};
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }
    const jobs = await Job.find(query);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/', async (req, res) => {
    try {
      const jobs = await Job.find();  // Fetch all jobs from the database
      res.json(jobs);  // Return all jobs as a JSON response
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

