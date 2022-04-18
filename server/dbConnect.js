var pg = require('pg');
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

//var connectionString = "postgres://qulaynxc:zwIMATnDC4p_yujWhgC1ccg1x6XpgRab@abul.db.elephantsql.com/qulaynxc";

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
                res.status(200).json(results.rows); 
            }
        })
    } else{
        console.log("Greška 2")
        response.status(200).json({"status":"unsuccessful"}); 
    }
}

/* const getKolegij = (req, res) => {
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
 }*/

const getKolegij = (req, res) => {
    const kor_id = parseInt(req.params.id)

    pool.query(`select distinct prd_id, nap_naziv,  osa_ime_p, osa_prezime_p--, , npr_id, npr_naziv, dok_naziv, odj_sif, ucn_id, o2.osa_id, o2.osa_ime osa_ime_u, o2.osa_prezime osa_prezime_u
                from profesor_predmet_v p
                , dokumenti d
                , predmeti_dokumenti pd
                , odjeljenje o
                , razred r
                , ucenici
                , osoba o2
            where prd_id = pdk_prd_id
                and dok_id = pdk_dok_id
                and raz_id = prd_raz_id
                and odj_raz_id = raz_id
                and odj_id = ucn_odj_id
                and ucn_osa_id = osa_id
                and dok_dok_id is null
                and osa_id = ${kor_id}`, 
        (err, results) => {
            if (err) console.log(err);
            else{
                res.json(results.rows)
            }
    })
}

const getUploads = (req, res) => {
    const eCourse_id = parseInt(req.params.id)

    pool.query(`select dok_id, dok_naziv, dok_opis, vrd_sif, vrd_naziv, to_char(dok_datdo, 'dd.mm.yyyy') dok_datdo, concat(to_char(dok_vrido, 'hh24:mi'), ' h') dok_vrido  
                from predmeti p
                , dokumenti d
                , vrste_dokumenata vd 
                , predmeti_dokumenti pd
            where prd_id = pdk_prd_id
                and dok_id = pdk_dok_id 
                and vrd_id = dok_vrd_id
                and prd_id = ${eCourse_id} `, 
        (err, results) => {
            if (err) console.log(err);
            else{
                res.json(results.rows)
            }
    })

}

const getUploadDetails = (req, res) => {
    const upload_id = parseInt(req.params.id)

    pool.query(`select dat_id, dat_naziv
                from datoteke d2
            where dat_dok_id = ${upload_id} `, 
        (err, results) => {
            if (err) console.log(err);
            else{
                res.json(results.rows)
            }
    })
}

// const getBlobFile = (req, res) => {
//     const naziv_dat = req.params.naziv
//     const file_url = req.params.url

//     pool.query(`select fn_puni_blob ('${naziv_dat}', '${file_url}')`, 
//         (err, results) => {
//             if (err) console.log(err);
//             else{
//                 res.json(results.rows)
//             }
//     })
// }

const postBlobFile = (req, res) => {
    const naziv_dat = req.params.naziv
    const file_url = req.params.url

    console.log("NAZIV: " + naziv_dat)
    console.log("URL_FILE: " + file_url)

    // const byteCharacters = atob(b64);
    // const byteNumbers = new Array(byteCharacters.length);
    // for (let i = 0; i < byteCharacters.length; i++) {
    // byteNumbers[i] = byteCharacters.charCodeAt(i);
    // }
    // const byteArray = new Uint8Array(byteNumbers);
    // const blob = new Blob([byteArray], {type: 'audio/mp3'});

    pool.query(`insert into test_blob (dat_naziv, dat_blob) 
                values ('${naziv_dat}', decode('${file_url}', 'base64'))`, 
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
    getKolegij,
    getUploads,
    getUploadDetails,
    postBlobFile,
    //getBlobFile,
} 