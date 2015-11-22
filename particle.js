//var jsdom = require("jsdom");
//var Request = require('request');
//var $ = require('jquery')(jsdom.jsdom().defaultView);
/*
module.exports = {

  createEvent: function (command,callback){


    var accessToken = 'd90d64dbf20b94969e33c40c02a7bbd565244e48'
    var deviceID = "1f0033000747343337373738";
    var setFunc = "motorset";
    var requestURL = "https://api.particle.io/v1/devices/" +deviceID + "/" + setFunc;

    Request.post(
                 requestURL,
                 {
                    form: {
                        access_token: accessToken,
                        args: command
                    }
                 },
                 function (error, response, body){
                    // If not error then prepare message and send

                    console.log(response);

                    if(!error){
                        callback();
                    }
                    else{
                        callback(error);
                    }
                 }
    );
    //$.post('https://api.particle.io/v1/devices/3a0029000b47343138333038/motorset', { arg: 'on', access_token: 'accessToken' });

  /*  $.ajax({
      url: requestURL,
      method: 'POST',
      headers: {
          'Authorization': 'Bearer d90d64dbf20b94969e33c40c02a7bbd565244e48',
          'Content-Type': 'application/json'
      },
      data: {
          'arg': 'on'
      },
      dataType: 'json',
      //contentType: 'application/json',
      success: function(){
        console.log('success!');
      },
      error: function( jqXhr, textStatus, errorThrown ){
        console.log(errorThrown);
      }
    });
    console.log('hello!!!!');

  }
};

var accessToken = "d90d64dbf20b94969e33c40c02a7bbd565244e48"
var deviceID = "390036001347343432313031";
var setFunc = "twiliofunc";
var requestURL = "https://api.spark.io/v1/devices/" +deviceID + "/" + setFunc + "/";

function activateFunction(){
$.ajax({
  type: "POST",
  url: requestURL,
  data: { params: "hello", access_token: accessToken }
});
}
*/
/*
     $.ajax({
       async:	false,
       type:	"GET",
       url:	"https://api.particle.io/v1/devices/1f0033000747343337373738/motorset",

       success:	function(response) {
           result = response;
       },
       'error':	function(jqXHR, textStatus, errorThrown) {

       }
     });
   }
 };*/
