
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./queries');

const port = 3000;

app.use(
    cors({
          origin:'*'
        })
    ) //omogućen pristup sa svih adresa

app.use(express.json()); //req.body

app.get("/mjesta", pool.getMjesta)
app.get("/mjesta/:id", pool.getMjesto)
app.get("/login/:email/:password", pool.loginUser)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
