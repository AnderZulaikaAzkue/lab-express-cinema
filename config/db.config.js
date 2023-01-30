const mongoose = require('mongoose');

// Iteration 3: configure database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/movies';

mongoose.connect(MONGODB_URI)
  .then(() => console.info(`Successfully connected to the database ${MONGODB_URI}`))
  .catch((error) => console.error(`An error ocurred trying to connect to the database ${MONGODB_URI}`, error))
