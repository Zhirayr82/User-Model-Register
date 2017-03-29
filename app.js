const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database');

//Connect to Database
mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected', () => {
	console.log('Database ' + config.database);
} );
//On Error
mongoose.connection.on('error', (err) => {
	console.log('Database error: ' + err);
} );

const app = express();

//Register
const users = require('./routes/users');

//Port Number
const port = 8000;

//CORS Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//
app.use('/users', users);

//Index Route
app.get("/", (req, res) => {
	res.send('Hello')
})

//Start server
app.listen(port, () => {
	console.log('Server is started en ' + port + " port");
})