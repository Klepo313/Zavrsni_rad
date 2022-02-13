var pg=require('pg');
var connectionString="postgres://qulaynxc:zwIMATnDC4p_yujWhgC1ccg1x6XpgRab@abul.db.elephantsql.com/qulaynxc";
var client =new pg.Client(connectionString);

client.connect(function(err){
    if(err){
        return console.error('Could not connect to postgres',err); 
    }
    client.query('SELECT NOW() AS "theTime" ',function(err,result){
        
        if(err) console.error('Error running query',err);

        console.log('Db connected:',result.rows[0].theTime);
    
    });
});

module.exports =client;