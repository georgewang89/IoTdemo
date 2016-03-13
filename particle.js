var Request = require('request');

module.exports = {

  createEvent: function (command){


    var accessToken = 'd90d64dbf20b94969e33c40c02a7bbd565244e48'
    var deviceID = "3a0029000b47343138333038";
    var setFunc = "motorset";
    var requestURL = "https://api.particle.io/v1/devices/" +deviceID + "/" + setFunc;

    Request.post(
       requestURL,
       {
          form: {
              access_token: accessToken,
              args: command
          }
       }
    );
   }
 };
