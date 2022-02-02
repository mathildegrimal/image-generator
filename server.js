const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Import Routes
const routes = require('./routes/routes');

// Route Middleware
app.use('/generate', routes);

app.listen(8000, () => {
    console.log('Server up and running');
});