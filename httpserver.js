var http = require('http');
var dispatcher = require('httpdispatcher');

const PORT = 8080;

function handleRequest(req,res){
    try{
   console.log('requested');
dispatcher.dispatch(req,res);
}catch(err){
    console.log(err);
}

}
dispatcher.onGet("/page1",function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
     console.log('data sent to page');
    res.end('Page one');
});

dispatcher.onPost("/post1", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
     console.log('data sent to database');
    res.end('got post data');
});

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("server listening on port %s",PORT);
});