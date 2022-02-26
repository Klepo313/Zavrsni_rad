
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./queries');

const port = 3000;

console.log(pool)

app.use(cors());
app.use(express.json()); //req.body

//Calls

app.get('/mjesta', async (req, res) => {
    try {
        const sva_mjesta = await pool.query("SELECT * FROM mjesta")
        res.json(sva_mjesta.rows)
    } catch (error) {
        console.log(error)
    }
})

//GET SPECIFIC ONE
app.get('/mjesta/:id', async (req, res) => {
    const { id } = req.params
    try {
        const mjesto = await pool.query(
            "SELECT * FROM mjesta WHERE mje_id = $1", 
            [id]
        )
        res.json(mjesto.rows[0])
    } catch (error) {
        console.log(error)
    }
})










app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
