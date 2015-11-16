var jsdom = require("jsdom");
var $ = require('jquery')(jsdom.jsdom().defaultView);

module.exports = {

  createEvent: function (test){

    console.log('hello!!!!');
    var accessToken = "d90d64dbf20b94969e33c40c02a7bbd565244e48"
    var deviceID = "390036001347343432313031";
    var setFunc = "twiliofunc";
    var requestURL = "https://api.spark.io/v1/devices/" +deviceID + "/" + setFunc + "/";



    $.post( requestURL, { params: "aa", access_token: accessToken });


  }
};

var accessToken = "d90d64dbf20b94969e33c40c02a7bbd565244e48"
var deviceID = "390036001347343432313031";
var setFunc = "twiliofunc";
var requestURL = "https://api.spark.io/v1/devices/" +deviceID + "/" + setFunc + "/";
/*
function activateFunction(){
$.ajax({
  type: "POST",
  url: requestURL,
  data: { params: "hello", access_token: accessToken }
});
}
*/
