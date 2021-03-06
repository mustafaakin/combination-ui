var express = require('express');
var http = require("http");
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(app.router);
app.use(require('less-middleware')(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.errorHandler());

app.get("/", function(req,res){
	res.sendfile("public/index.html");
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});