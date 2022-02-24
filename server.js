const express = require('express');
const app = express();
const cors = require('cors');
//const session = require('express-session');
const multer = require("multer");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(session({images:[]}));

// Import Routes
const routes = require('./routes/routes');

// Route Middleware
app.use('/', routes);

app.listen(8000, () => {
    console.log('Server up and running on PORT 8000');
});