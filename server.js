const express = require('express');
const app = express();

const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Hello from Contacts!' }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(PORT, () => console.log(`*** Server listening on port: ${PORT}`));
