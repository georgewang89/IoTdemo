var jsdom = require("jsdom");
var $ = require('jquery')(jsdom.jsdom().defaultView);

module.exports = {

  createEvent: function (test){

    console.log('hello!!!!');

    var accessToken = "d90d64dbf20b94969e33c40c02a7bbd565244e48"
    var deviceID = "3a0029000b47343138333038";
    var setFunc = "motorset";
    var requestURL = "https://api.particle.io/v1/devices/" +deviceID + "/" + setFunc;

    //$.post('https://api.particle.io/v1/devices/3a0029000b47343138333038/motorset', { arg: 'on', access_token: 'accessToken' });

    $.ajax({
      url: 'https://api.particle.io/v1/devices/390036001347343432313031/motorset',
      type: 'post',
      data: {
          arg: 'on'
      },
      headers: {
          Authorization: 'Bearer '+ accessToken
      },
      dataType: 'application/json'
    });
  }
};
/*
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
