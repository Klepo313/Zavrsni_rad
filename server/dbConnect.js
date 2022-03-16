var pg = require('pg');
//var connectionString = "postgres://qulaynxc:zwIMATnDC4p_yujWhgC1ccg1x6XpgRab@abul.db.elephantsql.com/qulaynxc";
var connectionString = "postgres://qulaynxc:oSbL2JSJAfv11W-XDm4tFpB2GA3aj6iM@abul.db.elephantsql.com/qulaynxc"
var pool = new pg.Client(connectionString);

pool.connect()

const getMjesta = (req, res) => {
    pool.query("SELECT * FROM mjesta LIMIT 10", (err, results) => {
        if (err){
            console.log(err)
        }
        res.json(results.rows)
    })
}

const getMjesto = async (req, res) => {
    const id = parseInt(req.params.id)

    pool.query("SELECT mje_naziv FROM mjesta WHERE mje_id = $1", [id], (err, results) => {
        if (err){
            console.log(err)
        } 
        res.json(results.rows)
    })
}

const loginUser = (request, response) => {
    var email = request.params.email;
    var passwd = request.params.password; 
    
    if(email && passwd){
        console.log("Pridani parametri: ")
        console.log("EMAIL: " + email + "\tPASSWORD: " + passwd)

       /* pool.query(`SELECT kor_id, kor_username FROM korisnik 
                    WHERE kor_username = '${email}' 
                    AND kor_password = '${passwd}'`, (err, results) => {

                        if(err) throw err; //U slučaju greške

                        else if(typeof(results.rows[0])!=="undefined"){

                            var id = results.rows[0].kor_id
                            var kor_username = results.rows[0].kor_username

                            console.log("\nPosli upita:")
                            console.log("ID: " + id)
                            console.log("EMAIL: " + kor_username);

                            response.status(200).json(results.rows);

                        } else{
                            console.log("Greška 2")
                            response.status(200).json({"status":"unsuccessful"}); 
                        }

                    }
                )*/
    
        pool.query(`SELECT kor_id, kor_username, kor_password,
                        (SELECT uv.osa_id
                        FROM   ucenici_v uv
                        WHERE  uv.osa_kor_id = kor_id) ucenik,
                        (SELECT pv.osa_id
                        FROM   profesori_v pv
                        WHERE  pv.osa_kor_id = kor_id) profesor
                    FROM   korisnik k
                    WHERE  kor_username = '${email}'
                    AND kor_password = '${passwd}' `, (err, results) => {

            if(err) throw err; //U slučaju greške

            else if(typeof(results.rows[0])!=="undefined"){

                var kor_id = results.rows[0].kor_id
                var kor_username = results.rows[0].kor_username
                var kor_password = results.rows[0].kor_password
                var kor_ucenik = results.rows[0].ucenik
                var kor_prof = results.rows[0].profesor

                //response.status(200).json(results.rows);
                response.status(200).json({
                    "status": "successful", 
                    "osa_id": kor_id, 
                    "osa_username": kor_username, 
                    "osa_password": kor_password, 
                    "osa_ucenik": kor_ucenik,
                    "osa_profesor": kor_prof
                })

            } else{
                console.log("Greška 2")
                response.status(200).json({"status":"unsuccessful"}); 
            }

                }
            )
    
    } else{
        console.log("Greška 1")
        response.status(200).json({"status":"unsuccessful"}); 
    }

}

const getUserDetails = (req, res) => {
    var kor_id = req.params.id;

    if(kor_id){
        pool.query(`SELECT * FROM ucenici_kor_v WHERE osa_id = ${kor_id}`, (err, results) => {
            if(err) throw err;
            else{
                console.log(results.rows)
                res.status(200).json(results.rows); 
            }
        })
    } else{
        console.log("Greška 2")
        response.status(200).json({"status":"unsuccessful"}); 
    }
}

const getKolegij = (req, res) => {
    const kor_id = parseInt(req.params.id)

    pool.query(`SELECT nap_id, nap_naziv, osa_id_p, osa_ime_p, osa_prezime_p
                FROM   predmeti_all_v
                WHERE  osa_id_u = ${ kor_id }
                ORDER  BY nap_id `, 
        (err, results) => {
            if (err) console.log(err);
            else{
                res.json(results.rows)
            }
    })
}

module.exports = {
    pool,
    getMjesta,
    getMjesto,
    loginUser,
    getUserDetails,
    getKolegij
} 