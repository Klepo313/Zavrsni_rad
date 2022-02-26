const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'razdat',
    password: '2c9medru',
    post: 5432
})

pool.query('SELECT * FROM mjesta', (err, res) => {
    console.log(err, res)
    pool.end()
})

pool.connect();

module.exports = pool;