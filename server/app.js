var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var api = require('./routes/api')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hacktivpress-parel');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected to hacktivpress-parel')
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api', api);

app.listen(3000, () => {
  console.log('App is listening to port 3000');
})

module.exports = app;
