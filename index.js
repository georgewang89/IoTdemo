var express = require('express');
var spark = require('spark');
var twilio = require('twilio.js')
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(request, response){
response.send('main page works!');

app.get('/sendSMS', function(request, response){
  twilio.sendSMS();
  response.send('SMS sent!');
});
