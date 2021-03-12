const dotenv = require('dotenv').config();
const mysql = require('mysql');

function database(){
    return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DBNAME,
    charset: process.env.DB_CHARSET,
});
}

exports.HPFN_getUidByRoomNo = function(room_no){
    var conn = database();
    const sql = "SELECT uid FROM user WHERE room_no=?;";
    conn.query(sql,[room_no],(err,rows)=>{
        if(err){
            conn.end();
            console.log({ status:"fail",msg:err});
            return null;
        } else{
            conn.end();
            const OBJ = rows.map((row)=>{
                return{
                    uid:row.uid
                }
            });
            return OBJ[0].uid
        }
    } );
}

module.exports = HPFN_getUidByRoomNo(room_no);