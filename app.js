var express=require('express');
var app=express();
var route=require('./routes/route.js');
app.set('view engine','jade');
app.use(express.static(__dirname + '/public'));

app.get('/',route.home);
app.get('/:city',route.city);

var port = process.env.PORT || 8080;
var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
