var express = require("express");
var app = express();
var port = process.env.PORT || 8080;


app.use(express.static(__dirname + "/public")); //Express.js den Pfad für files in /public zeigen

app.use('/public', express.static(__dirname + '/public')); //Express.js den Pfad für files in /public zeigen


app.use(express.static(__dirname ));

app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname + "/public" } );
});


app.listen(port, function() {
  console.log("Listening on " + port);
});