const express = require('express');
const bodyParser = require('body-parser');
const db = require('../influxDB/DBconnection')

const app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + '/src/app'));
app.use(express.static(__dirname + '/../node_modules'));



app.get('/api', (request, response) => {
  const { location } = request.params;

  // db.query(`
  //   select * from tide
  //   where location =~ /(?i)(${location})/
  // `)
  // .then(result => response.status(200).json('result'))
  // .catch(error => response.status(500).json({ error }));
  result => response.status(200).json('result');
});

app.listen(8080, function() {
  console.log('listening on port 8080');
});



module.exports.app = app;