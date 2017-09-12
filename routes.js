var router = require('express').Router();
const xray = require('x-ray');
const x = xray();
const horseman = require('node-horseman');
const fs = require('fs');

//get blurbs in json
//cards idea?
router.get('/hoop-ball', function(req, res) {
	x('https://www.hoop-ball.com/category/nba-fantasy-news-and-advice/', '.blurb', [{
		title: '.title',
		text: 'div'
	}])
	.paginate('.pagination span.current ~ a.inactive@href')
	.limit(5)(function(err, obj){
		if (err) {
			return res.status(500).json({error: err});
		}
		return res.status(200).json(obj);
	});
});

//trial run with horseman
//looks good
router.get('/horse', (req, res) => {
	const horse = new horseman();
	horse
		.open('http://rotoworld.com/stats/nba/931/dwyane-wade')
		.html('#cp1_ctl01_pnlPlayerStats')
		.then((html) => {
			console.log(html);
			return res.status(200).json(html);
		})
		.close();
});

//TODO: use await async for this part
//https://github.com/yortus/asyncawait#6-quick-start
let promiseFn = () => {
	return new Promise((resolve, reject) => {
		let promiseArray = [];
		for (let i = 0; i < 10; i++) {
			promiseArray.push(new Promise((resolve, reject) => {
				const horse = new horseman();
				let obj = {};
				horse
					.open(`http://www.espn.com/nba/player/_/id/${i}`)
					.html('h1')
					.then((html) => {
						//TODO: additional functionality
						//filter out old players (inactive)
						console.log(html);
						obj.id = i;
						obj.player = html;
					})
					.close();
				resolve(obj);
			}));
		}
		resolve(promiseArray);
	});
}

//TODO: need to write script to scrap urls
//espn - http://www.espn.com/nba/player/_/id/1987/dwyane-wade
//gather ids and names
router.get('/scrap-url-espn', (req, res) => {
	let output = [];
	
	promiseFn().then(resp => {
		Promise.all(resp).then(response => {
			console.log('why do this first?');
			console.log(response);
		});
	});
	
	//write list of players
	// fs.writeFile('./espn.json', JSON.stringify(output), 'utf-8', (err) => {
	// 	if (err) {
	// 		console.log(err);
	// 	}
	// });	
});

//TODO: make function to make basketball referene url for player
//https://www.basketball-reference.com/players/c/curryst01.html
// it is /players/{letter}/{first 5 of last name}+{first 2 of first name}+{01 if first iteration of this unique key}.html
// then make a route to hit this url and confirm it works

module.exports = router;