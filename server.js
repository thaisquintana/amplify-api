/*
 * Script to configure node server
 *
 * Copyright 2015 NPT
 * https://github.com/nmdantas/amplify-api
 *
 * Author: Nicholas M. Dantas
 * Date  : 2015-07-03
 */

// Constants
var PORT = process.env.port || 1338;

// Packages and private variables that will be used
var express 		= require('express');
var bodyParser		= require('body-parser');
var serverConfig	= express();
var router			= express.Router();

// Middleware to use for all requests
router.use(function (req, res, next) {
    console.log('Request:\r\n\tHttp Verb\t[%s]\r\n\tURL\t\t[%s]', req.method, req.url);

    // Make sure we go to the next routes and don't stop here
    next(); 
});

// Default route
router.use('/', function(req, res) {
	res.json({ message : 'Welcome to Amplify API!' });
});



// Configure body parser for http requests
serverConfig.use(bodyParser.urlencoded({ extended : true }));
serverConfig.use(bodyParser.json());

// Register our routes
serverConfig.use('/api', router);

// Start the server
serverConfig.listen(PORT);
console.log('Magic happens on port: ' + PORT);