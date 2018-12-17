/*
 * Example TCP (TLS) Server
 * Listens to port 6000 and then sends the word "pong" to client
 *
 */

 // Dependencies
 var tls = require('tls');
 var fs = require('fs');
 var path = require('path');

 // Server Options
 var options = {
     'key' : fs.readFileSync(path.join(__dirname, '/../https/key.pem')), // Only required because we are using self-sign certificate 
     'cert' : fs.readFileSync(path.join(__dirname, '/../https/cert.pem')) 
 };

 // Create the Server
 var server = tls.createServer(options,function(connection){
     // Send the word "pong"
     var outboundMessage = 'pong';
     connection.write(outboundMessage);

     // When the client writes something log it out
     connection.on('data', function(inboundMessage){
        var messageString = inboundMessage.toString();
        console.log("I wrote "+ outboundMessage + " and they said "+messageString);
     });
 });

 // Listen on port 6000
 server.listen(6000);