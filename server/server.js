const express = require('express');
const bodyParser = require('body-parser');



const app = express();


app.use(bodyParser.json());



app.use(express.static(__dirname + '/src/app'));
app.use(express.static(__dirname + '/../node_modules'));


  ;

app.listen(8080, function() {
  console.log('listening on port 8080');
});



module.exports.apps = app;