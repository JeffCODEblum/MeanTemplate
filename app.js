var express = require('express');					// our app framework
var session = require('express-session');		// our session manager
var bodyParser = require('body-parser');		// to parse data from request body
var mongoose = require('mongoose');			// database
var app = express();										// our app object
var http = require('http').Server(app);			// our http server
var path = require('path');								// path to resources
var config = require('./config');						// our config file

app.use(express.static(path.join(__dirname + '/public')));											// our static resource directory
app.use(bodyParser.urlencoded({extended: false}));												// body parser options
app.use(bodyParser.json());
app.use(session({secret: config.secret, resave: true, saveUninitialized: true}));		// setting up sessions
//mongoose.connect(config.database);																			// connect to database
app.set('secret', config.secret);																					// configure our secret key


// Start up the server
http.listen(3000, function() {
	console.log("listening on *:3000");
});

// Handle requests
app.post('/page1', function(req, res) {
	res.end("page 1 data");
});

app.post('/page2', function(req, res) {
	res.end("page 2 data");
});