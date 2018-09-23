var http = require('http');
var url  = require('url');
var requests=0;
var podname= process.env.HOSTNAME;
var startTime;
var host;
var handleRequest = function(request, response) {
  response.setHeader('Content-Type', 'text/html');
  response.writeHead(200);
  response.write("<html><body>Hello Hackerkiste Kubernetes | Running on: ");
  response.write(host+"<br>\n");
  var url_parts = url.parse(request.url, true);

  var query = url_parts.query;
  if( ! query.a ) {
      response.write("<form>\n");
      response.write("Please enter number: <input type='text' name='a'/> ");
      response.write("</form>\n");
  } else {
      var a = eval( query.a );
      var square = a * a;
      response.write("square=" + square.toString() + "<br>\n" );
      response.write("<a href='.'>Again</a><br>\n" );
  }
  response.end("</body></html>");
  console.log("Running On:" ,host, "| Total Requests:", ++requests,"| App Uptime:", (new Date() - startTime)/1000 , "seconds", "| Log Time:",new Date());
};
var www = http.createServer(handleRequest);
www.listen(8080,function () {
    startTime = new Date();
    host = process.env.HOSTNAME;
    console.log ("Kubernetes Bootcamp App Started At:",startTime, "| Running On: " ,host, "\n" );
});
