const colors = require('colors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(cors());
// for parsing application/json 
app.use(bodyParser.json());
//for parsing application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


console.log('running index.js'.blue);


app.get('http://localhost:1337', function(req, res) {
	res.send('Hello World!')

});

app.listen(1337, function() {
	console.log('Example app listening on port 1337!'.red)
});