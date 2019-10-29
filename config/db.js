const mongoose = require('mongoose');
const config = require('config');
const dbHas = config.has('mongoURI');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
      })
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.error(err.message));
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
