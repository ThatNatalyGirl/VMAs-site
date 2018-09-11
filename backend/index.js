const colors = require('colors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
// Set Public Folder
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// enable cors 
app.use(cors());


let votes = [0,0,0,0,0,0]
const port = 1337;

for (var i = 0; i < votes.length; i++) {
	votes[i]
}
console.log('running index.js'.blue);


app.get('/', function(req, res) {
	res.send('Hello World! from the server')

});

app.post('/vote/:artistID', function(req, res) {
	if (req.params.artistID === '0') {
		res.send('artist id is ' + req.params.artistID)
		votes[0]++;
		console.log(votes)
		console.log('founr first button')
		
	}else if (req.params.artistID === '1') {
			res.send('artist id is ' + req.params.artistID)
			votes[1]++;
			console.log(votes)
			console.log('found second button');
	} else if (req.params.artistID === '2') {
			res.send('artist id is ' + req.params.artistID)
			votes[2]++;
			console.log(votes)
			console.log('found  third button');
	} else if (req.params.artistID === '3') {
			res.send('artist id is ' + req.params.artistID)
			votes[3]++;
			console.log(votes)
			console.log('found fourth button');
	} else if (req.params.artistID === '4') {
			res.send('artist id is ' + req.params.artistID)
			votes[4]++;
			console.log(votes)
			console.log('found fifth button');
	}	else if (req.params.artistID === '5') {
			res.send('artist id is ' + req.params.artistID)
			votes[5]++;
			console.log(votes)
			console.log('found second button');
	}
	

});


app.listen(port, function() {
	console.log('Example app listening on port 1337!'.red)
});

