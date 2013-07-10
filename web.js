var express = require('express');

var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fileToRead = "index.html";
  var input = fs.readFileSync(fileToRead);
  //response.send('Hello World 2!');
  response.send(input);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
