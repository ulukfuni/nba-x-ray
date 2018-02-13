'use strict';
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = process.env.PORT || 4000;
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

try {
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
	app.use('/', routes);
} catch (e) {
	console.log('fail');
}

app.listen(port, function(){
	console.log('listening on port 4000');
});