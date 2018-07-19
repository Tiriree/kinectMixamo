//Express
var express = require('express');
var app = express();
//ejs
var ejs = require('ejs');
//HTTP and creating our awasome server
var http = require('http').createServer(app);
var port = process.env.PORT || 8000;
var server = app.listen(port);
var fs = require('fs');

//Sockets
console.log("Server running and listening at port " + port);

//Setup public lib
app.use(express.static(__dirname + '/public'));
//Setup the views folder
app.set("views", __dirname + '/views');

//Setup ejs, so I can write HTML (:
app.engine('.html', ejs.__express);
app.set('view-engine', 'html');

//Router
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/fbx", function(req, res){
    res.render("fbx.html");
});
app.get("/dae", function(req, res){
    res.render("dae.html");
});
