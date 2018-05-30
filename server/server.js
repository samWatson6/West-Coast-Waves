const express = require('express');
const bodyParser = require('body-parser');



const app = express();


app.use(bodyParser.json());



app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/../node_modules'));

app.use('/');

app.listen(4200, function() {
  console.log('listening on port 8000');
});

