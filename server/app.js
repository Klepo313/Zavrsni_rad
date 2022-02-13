var express=require('express');
var cors=require('cors');
var app=express();
const client=require('./dbConnect');
app.use(cors());
require('dotenv').config(); 

app.set("port",process.env.PORT || 3000);
var port=app.get('port');


app.listen(port, function(){
    var host="localhost";
    console.log("Server listening on port http://%s:%s", host, port);
})