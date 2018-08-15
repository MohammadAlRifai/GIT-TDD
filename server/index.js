const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../angular-client/')));

app.get('/cats', function(req, res) {
	console.log('server: get all cats');
	res.json('rifaa 8ata3a jozaa faza3a');
	// TODO - your code here!
});

app.post('/cats', function(req, res) {
	console.log('server: add new cat');
	db.save(req.body, function(msg) {
		console.log(msg);
		res.send(msg);
	});
});

let port = 1128;

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});
module.exports = app;
