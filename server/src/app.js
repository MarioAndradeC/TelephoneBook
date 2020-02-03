const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// App
const app = express();


//--------
const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100'
];

//----------

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cors({ origin: allowedOrigins }));

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const telephoneRoutes = require('./routes/telephone-route');
app.use('/api', telephoneRoutes);

module.exports = app