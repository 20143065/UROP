var express = require('express');
var mysql = require('mysql');
var http = require('http');

const app = express();
var connection = mysql.createConnection({
    host     : '35.221.74.145',
    user     : 'root',
    password : 'qwe123',
    port     : 3306,
    database : 'urop2'
});

connection.connect();

app.get('/', (req, res, next) => {
    res.send('UROP2');
});

app.listen(9000, () => {
    console.log(`Server is running at ${port}`);
});

app.get('/showdata',function(req,res){
     connection.query('SELECT * from pi1', function(err, rows, fields){
        if (!err){
            console.log('The solution is: ', rows);
            res.send(rows);
        }
        else
            console.log('Error while performing Query.', err);
    });
});

http.createServer(function (req, res) {
  var jsonData = "";
  req.on('data', function (chunk) {
    jsonData += chunk;
  });
  req.on('end', function () {
    var reqObj = JSON.parse(jsonData);
    var resObj = {
        d_id: "" + reqObj.d_id,
        d_type: "" + reqObj.d_type,
        d_ip: "" + reqObj.d_ip,
        d_data1: "" + reqObj.d_data1,
        d_data2: "" + reqObj.d_data2,
        d_data3: "" + reqObj.d_data3,
        d_data4: "" + reqObj.d_data4,
        time: "" + reqObj.time
    };

      
    res.writeHead(200);
    res.end(JSON.stringify(resObj));
    console.log(reqObj);
  });
}).listen(8080);
