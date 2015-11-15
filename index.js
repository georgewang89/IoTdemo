var express = require('express');
var twilio = require('./twilio.js');
var bodyParser = require('body-parser');
//var ejs = require('ejs');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));

app.use(express.static(__dirname + '/public'));

//app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(request, response){
  response.render('pages/home');
});

app.get('/sendSMS', function(request, response){
  twilio.sendSMS();
  console.log('hello');
  response.send('SMS sent!');
});
/*
app.post('/respondtotwiliocall'), function(request, respond){
 //if (twilio.validateExpressRequest(request, '143c81738b3c5ef61b3652b27e9400b4'))
  var twiml = new twilio.TwimlResponse();
  twiml.say('Hello World!');
}*/

app.post('/respondtotwiliosms', function(request, respond){
  //var sms = "";
  var sms = request.body.Body;
  var smsFrom = request.body.From;
  twilio.sendSMS(sms, smsFrom);
  response.send('');

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
