var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});


   var server_name = request.headers["server-name"];

   if(server_name != undefined){

     response.end('Hello World from '+server_name+'\n');

   }
   else{
     var http = require('http');

     http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
       resp.on('data', function(ip) {

         response.end('Hello World from '+ip+'\n');

       });
     });
   }


}).listen(80);

// Console will print the message
console.log('Server running at http://127.0.0.1:80/');
