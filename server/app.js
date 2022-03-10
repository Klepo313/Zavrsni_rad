
require('dotenv').config(); 

var express = require('express');
var cors = require('cors');
var app = express();
const pool = require('./dbConnect');

const port = 3000;

app.use(cors());

// app.set("port", process.env.PORT || 3000);
// var port = app.get('port');

app.get("/mjesta", pool.getMjesta)
app.get("/mjesta/:id", pool.getMjesto)
app.get("/login/:email/:password", pool.loginUser)
app.get("/userDetails/:id", pool.getUserDetails)


app.listen(port, () => {
    var host = "localhost";
    console.log(`Server listening on port http://%s:%s`, host, port);
})