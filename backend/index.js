const colors = require('colors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

let votes = [0,0,0,0,0,0]

for (var i = 0; i < votes.length; i++) {
	votes[i]
	console.log(votes[i])
}



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


console.log('running index.js'.blue);


app.get('/', function(req, res) {
	res.send('Hello World! from the server')

});

app.post('/vote/:artistID', function(req, res) {
	res.send('artist id is ' + req.params.artistID)

});

app.listen(1337, function() {
	console.log('Example app listening on port 1337!'.red)
});

