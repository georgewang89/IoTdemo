var express = require('express');
var spark = require('spark');
var twilio = require('./twilio.js')
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(request, response){
response.render('./pages/home.ejs')
});

app.get('/sendSMS', function(request, response){
  twilio.sendSMS();
  console.log('hello');
  response.send('SMS sent!');
});

app.get('/respondtotwilliosms', function(request, respond)
  if (twilio.validateExpressRequest(req, 'YOUR_AUTH_TOKEN')) {
       var twiml = new twilio.TwimlResponse();
       console.log(twiml);
       twilio.sendSMS();
  }
});

console.log(
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
