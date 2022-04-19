
require('dotenv').config(); 

var express = require('express');
var cors = require('cors');
var app = express();
const pool = require('./dbConnect');

const port = 3000;

app.use(cors());
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.get("/mjesta", pool.getMjesta)
app.get("/mjesta/:id", pool.getMjesto)
app.get("/login/:email/:password", pool.loginUser)
app.get("/userDetails/:id", pool.getUserDetails)
app.get("/eCourses/:id", pool.getKolegij)
app.get("/eCourses/:id/:id", pool.getUploads)
app.get("/eCourses/:id/:id/:id", pool.getUploadDetails)
app.post("/blobFile/:naziv/:url(*)", pool.postBlobFile)
//app.get("/getBlobFile?naziv=:naziv&url=:url", pool.getBlobFile)

app.listen(port, () => {
    var host = "localhost";
    console.log(`Server listening on port http://%s:%s`, host, port);
})