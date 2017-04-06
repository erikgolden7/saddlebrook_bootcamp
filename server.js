const express = require('express');
const bodyParser = require('body-parser');


const app = module.exports = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

const port = 8080;
app.listen(port, function() {
	console.log('Listening to port:', port)
});



