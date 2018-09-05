const colors = require('colors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


console.log('running index.js'.blue);


app.get('/', function(req, res) {
	res.send('Hello World! from the server')

});

app.post('/vote', function(req, res) {
	res.send('recived Data from DOM')

});

app.listen(1337, function() {
	console.log('Example app listening on port 1337!'.red)
});

// in express set up variables for artist then do ++ for when a vote comes in