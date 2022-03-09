const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'razdat',
    password: '2c9medru',
    post: 5432
})

pool.connect();

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
        pool.query(`SELECT * FROM osoba WHERE osa_kor_id = ${kor_id}`, (err, results) => {
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

module.exports = {
    pool,
    getMjesta,
    getMjesto,
    loginUser,
    getUserDetails,
} 

/*

    console.log("Evo me u controlleru");

    console.log(email);
    console.log(passwd); 

      if(email&&passwd){
  
        client.query(`SELECT kor_email FROM korisnik WHERE (kor_email='${email}') AND (kor_lozinka='${passwd}')`, function(err,result){ //Ako postoji korisnik
  
            if(err) throw err;
            else if(typeof(result.rows[0])!=="undefined"){

                console.log(result.rows[0].email);
                console.log(passwd);
                
                client.query(`SELECT id_racuna, uloga FROM korisnicki_racun WHERE email='${result.rows[0].email}'`, function(err,res){  //Trazimo ID

                  if(err) throw err;
                    var uloga=res.rows[0].uloga;
                    var id_racuna=res.rows[0].id_racuna;

                    console.log(uloga); 
                    console.log(id_racuna);

                    client.query(`INSERT INTO korisnik_log(id_racuna) VALUES('${id_racuna}');`, function(err,res){  //Spremamo u bazu da se logirao
                    
                        if(err) throw err;

                    client.query(`SELECT id_osobe FROM osoba WHERE id_racuna='${id_racuna}'`, function(err,res){ //Trazimo
                      
                        if(err) throw err; 
                        var id_osobe=res.rows[0].id_osobe; 
                        console.log(id_osobe);
                        
                        response.status(200).json({"status":"successful", "id_osobe":id_osobe, "id_racuna":id_racuna, "uloga":uloga});
                      });
                    });
                
                });
               
                  //response.status(200).json({"status":"unsuccessful"}); 
            }else{
                  
                response.status(200).json({"status":"unsuccessful"}); 
        
            }   
          });
        }


        else{
                  
            response.status(200).json({"status":"unsuccessful"}); 
    
          }
*/

