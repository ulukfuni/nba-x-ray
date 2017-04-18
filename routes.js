var routes = require('express').Router();
const xray = require('x-ray');
const x = xray();

routes.get('/hoop-ball', function(req, res) {
	x('https://www.hoop-ball.com/category/nba-fantasy-news-and-advice/', '.blurb', [{
		title: '.title',
		text: 'div'
	}])
	.paginate('.pagination span.current ~ a.inactive@href')
	.limit(5)(function(err, obj){
		if (!err) {
			console.log(obj);
			return res.status(500).json({error: err});
		}
		return res.status(200).json({results: obj});
	});
});

module.exports = routes;