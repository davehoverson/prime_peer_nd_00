/**
 * Created by davidhoverson on 9/22/15.
 */
var http=require('http');
//var randomNumber = require("./random");
//var dollarConversion = require("./dollar");
var finalOutput = require("./account");

http.createServer(function(request, response){
    response.writeHead(200);
    //response.write(randomNumber());
    //response.write("\n");
    //response.write(dollarConversion(5));
    response.write(finalOutput.accountText());
    //response.write(accountBalance);
    response.end();
}).listen(3000);

console.log("Listening on port 3000");
//console.log(randomNumber());
//console.log(dollarConversion(5));
