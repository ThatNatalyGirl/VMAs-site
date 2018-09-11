const colors = require('colors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


let votes = [0,0,0,0,0,0]
const port = 1337;

// for (var i = 0; i < votes.length; i++) {
// 	votes[i]
// }
console.log('running index.js'.blue);


app.get('/vote/:artistID', function(req, res) {
	res.send(votes)
});

app.post('/vote/:artistID', function(req, res) {

	let artistNumber = parseInt(req.params.artistID);
		
	console.log('artist id is ' + artistNumber)
	votes[artistNumber]++;
	console.log(votes)
	console.log('found '+artistNumber+'th button')

	res.send(votes)
});


app.listen(port, function() {
	console.log('Example app listening on port 1337!'.red)
});

