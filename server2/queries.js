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
    pool.query("SELECT * FROM mjesta", (err, results) => {
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
    var email = request.body.email;
    var passwd = request.body.password; 

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
}


module.exports = {
    pool,
    getMjesta,
    getMjesto,
} 


