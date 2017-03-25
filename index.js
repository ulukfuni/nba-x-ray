'use strict';
const xray = require('x-ray');
const x = xray();

//for hoop-ball
x('https://www.hoop-ball.com/category/nba-fantasy-news-and-advice/', '.blurb', [{
	title: '.title',
	text: 'div'
}])
.paginate('.pagination span.current ~ a.inactive@href')
.limit(3)(function(err, obj){
	if (!err) {
		console.log(obj);
	} else {
		console.log(err);
	}
});

//rotoworld
//might have to use phantom to interact with page
//TODO: use phantom driver to interact with page to paginate, use #cp1_ctl00_btnNavigate1Bot
x('http://www.rotoworld.com/playernews/nba/basketball-player-news', '.pb', [{
	title: 'div.player',
	text: 'div.headline ~ div'
}])(function(err, obj){
	if (!err) {
		console.log(obj);
	} else {
		console.log(err);
	}
});