var router = require('express').Router();
const xray = require('x-ray');
const x = xray();

//get blurbs in json
//cards idea?
router.get('/hoop-ball', (req, res) => {
	x('https://www.hoop-ball.com/category/nba-fantasy-news-and-advice/', '.blurb', [{
		title: '.title',
		text: 'div',
		date: '.entry-date'
	}])
	.paginate('.pagination span.current ~ a.inactive@href')
	.limit(2)((err, obj) => {
		if (err) {
			return res.status(500).json({error: err});
		}
		console.log(obj.length)
		return res.status(200).json(obj);
	});
});

router.get('/rotogrinders', (req, res) => {
	x('https://rotogrinders.com/news/nba', '.crd', [{
		title: '.bdy h3',
		report: '.analysis',
		date: '.hdr time'
	}])
	.paginate('.pagination a:last-child@href')
	.limit(5)((err, obj) => {
		if (err) {
			return res.status(500).json({error: err})
		}
		console.log(obj.length)
		return res.status(200).json(obj)
	})
});

router.get('/rotoworld', (req, res) => {
	x('http://www.rotoworld.com/playernews/nba/basketball-player-news', '.pb', [{
		title: 'div.player a',
		report: 'div.headline ~ div .report p',
		impact: 'div.headline ~ div .impact',
		date: 'div.headline ~ div .info .date'
	}])((err, obj) => {
		if (err) {
			return res.status(500).json({error: err})
		}
		console.log(obj.length)
		return res.status(200).json(obj)
	})
});

router.get('/fantasyalarm', (req, res) => {
	x('https://www.fantasyalarm.com/nba-player-news', '.news-card', [{
		title: '.new-card-text a',
		report: '.news-card-text div',
		date: '.news-card-time'
	}])((err, obj) => {
		if (err) {
			return res.status(500).json({error: err})
		}
		console.log(obj.length)
		return res.status(200).json(obj)
	});
});


module.exports = router;