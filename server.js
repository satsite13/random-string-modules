var express = require('express');
var crypto = require('crypto');
var random = require('./other_modules/module1.js');

var app = express();
crypto.randomBytes(3, (err, buf) => {
   console.log(buf);
   var crypt = buf.toString("ascii");
   console.log(crypt);
});

app.get('/', function(req, res){
      res.send(`Random Characters: ${random.RandomChar(40)}`);
});


app.listen(3000, function(){
   console.log("running on port 3k");
})