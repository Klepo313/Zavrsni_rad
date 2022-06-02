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

const postFile = (req, res) => {

    const data = req.body
    
    obj = {
        "upload_id": data.upload_id,
        "osa_id": data.osa_id,
        "name": data.name,
        "dat_file": data.dat_file,
        "ext": data.ext,
        "mimeType": data.mimeType,
        "base64": data.base64
    }

    pool.query(`insert into datoteke (dat_dok_id, dat_naziv, dat_file, dat_ext, dat_blob, dat_mimetype, dat_vrsta, dat_kor_id, dat_visibility)
    values(${obj.upload_id}, '${obj.name}', '${obj.dat_file}', '${obj.ext}', decode('${obj.base64}', 'base64'), '${obj.mimeType}', 'U', ${obj.osa_id}, true)`, 
    (err, results) => {
        if (err) console.log(err);
        else{
            res.status(200).json({"status":"successful"});
        }
    })

    // pool.query(`insert into test_blob (dat_naziv, dat_blob, dat_mimeType) 
    //         values ('${obj.name}', decode('${obj.base64}', 'base64'), '${obj.mimeType}')`, 
    // (err, results) => {
    //     if (err) console.log(err);
    //     else{
    //         res.json("Uspješno spremljeno:\n" 
    //         + "DATOTEKA_IME: " + obj.name  + ", " + obj.mimeType)
    //     }
    // })
}

const getAttachedData = (req, res) => {

    const upload_id = parseInt(req.params.id)

    pool.query(`select dat_id, dat_naziv, encode(dat_blob, 'base64') 
                    dat_base64, dat_mimetype, dat_vrsta 
                from datoteke d2
                where dat_dok_id = ${upload_id}
                and dat_vrsta = 'P'
                and dat_kor_id IS NULL`, 
    (err, results) => {
        if (err) console.log(err);
        else{
            res.json(results.rows)
        }
    })

}

const getUploadedWork = (req, res) => {
    const kor_id = parseInt(req.params.id)
    const upload_id = parseInt(req.params.upload_id)

    pool.query(`select dat_id, dat_naziv, encode(dat_blob, 'base64') 
                    dat_base64, dat_mimetype, dat_vrsta 
                from datoteke d2
                where dat_dok_id = ${upload_id}
                and dat_kor_id = ${kor_id}
                and dat_visibility = true `, 
    (err, results) => {
        if (err) console.log(err);
        else{
            res.json(results.rows)
        }
    })
}

const deleteFile = (req, res) => {
    const data = req.body
    const file_id = data.file_id

    console.log("File_id: " + file_id)

    pool.query(`update datoteke 
                set dat_visibility = false 
                where dat_id = ${file_id}`, 
    (err, results) => {
        if (err) console.log(err);
        else{
            res.json("successful")
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
    postFile,
    getAttachedData,
    getUploadedWork,
    deleteFile
} 