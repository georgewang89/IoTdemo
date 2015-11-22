var express = require('express');
var twilio = require('./twilio.js');
var bodyParser = require('body-parser');
var particle = require('./particle.js');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));

app.use(express.static(__dirname + '/public'));

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


app.post('/respondtotwiliosms', function(request, response){
  //var sms = "";
  var sms = request.body.Body;
  var smsFrom = request.body.From;
  twilio.sendSMS("thanks for sending "+sms+" from "+smsFrom+". Save me to your contacts as Rainbow Unicorn =3", smsFrom);
  particle.createEvent(sms);
  response.send('');

});

app.get('/triggerphoton', function(request, response){
  particle.createEvent(on);
  response.send('');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
