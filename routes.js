var router = require('express').Router();
const xray = require('x-ray');
const x = xray();
const horseman = require('node-horseman');

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

//TODO: need to write script to scrap urls
//espn - http://www.espn.com/nba/player/gamelog/_/id/4000/dwyane-wade
//gather ids and names

module.exports = router;