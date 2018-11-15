var http = require('http');
 
var options = {
  host: 'ec2-54-214-204-13.us-west-2.compute.amazonaws.com',
  path: '/',
  port: '8080',
  method: 'POST'
};
 
function readJSONResponse(response) {
  var responseData = '';
  response.on('data', function (chunk) {
    responseData += chunk;
  });
 
  response.on('end', function () {
    var dataObj = JSON.parse(responseData);
    console.log("Data transmission complete");
    console.log("Response server data");
    console.log("Save the Database: " +responseData);
  });
}
 
var req = http.request(options, readJSONResponse);
req.write('{"d_id":"00001", "d_type":"raspberry_pi", "d_ip":"192.168.1.1", "d_data1": "25", "d_data2" : "80", "d_data3": "NULL", "d_data4":"NULL", "time":"2018-10-31 03:09:00"}');
req.end();
