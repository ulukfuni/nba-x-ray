'use strict';
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const nightmare = require('nightmare')();
const routes = require('./routes');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, function(){
	console.log('listening on port 3000');
});

//use nightmare to grab rotoworld blurbs
//TODO: need to make a function that paginates through and grabs blurbs
// nightmare
// 	.goto('http://www.rotoworld.com/playernews/nba/basketball-player-news')
// 	.wait('.pb')
// 	.evaluate(function(){
// 		var blurbs = [];
// 		const nodeList = document.querySelectorAll('.pb');
// 		for(var i = 0; i < nodeList.length; i++) {
// 			blurbs.push(nodeList[i].innerText);
// 		}
// 		return blurbs;
// 	})
// 	.end()
// 	.then(function(result) {
// 		console.log(result);
// 	})
// 	.catch(function(error) {
// 		console.log(error, 'error');
// 	});
	// .click('#cp1_ctl00_btnNavigate1Bot')
	// .wait('.pb')
	// .evaluate(function(){
	// 	return document.querySelectorAll('.pb');
	// })

//rotoworld
//might have to use phantom to interact with page
//TODO: use phantom driver to interact with page to paginate, use #cp1_ctl00_btnNavigate1Bot
// x('http://www.rotoworld.com/playernews/nba/basketball-player-news', '.pb', [{
// 	title: 'div.player',
// 	text: 'div.headline ~ div'
// }])(function(err, obj){
// 	if (!err) {
// 		console.log(obj);
// 	} else {
// 		console.log(err);
// 	}
// });