//create web server
var http = require('http');
//create file system object
var fs = require('fs');
//create url object
var url = require('url');
//create querystring object
var querystring = require('querystring');

//create web server
var server = http.createServer(function(req, res) {
    //get the url and parse it
    var parsedUrl = url.parse(req.url);
    //get the path
    var path = parsedUrl.pathname;
    //trim
});