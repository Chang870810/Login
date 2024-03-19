const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
//const totp = require("totp-generator");
//const twilio = require('twilio')("AC9808a337f5f568a6937c816e18e35b09", "6c7741e2f861e9bcc5386bcd11c5393b");

const app = express();
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.json());

var db = mysql.createPool({
    user: "root", 
    password: "123456789",
    host: "localhost", 
    database: "login", 
    multipleStatements: true,
});
app.post("/search", (req, res)=>{
    db.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM login.login_info WHERE EMAIL LIKE ? and PASSWORD LIKE ?;', [ req.body.account, req.body.password], 
        (err, rows) => {
            if (err) throw err; 
            if(rows.length == 1){
                //const token = totp("JBSWY3DPEHPK3PXP", { timestamp: Date.now() });
                res.send(true);
            }
            else{
                res.send(false);
            }
            connection.release();
        }
        );
    });
});
app.post("/insert", (req, res)=>{
    db.getConnection((err, connection) => {
        if (err) throw err;
        var q = 'INSERT INTO login.login_info (EMAIL, PASSWORD, ADDRESS, CELLPHONE, CREATE_DATE) SELECT * FROM (SELECT ?, ?, "    ", "0985304581", "2021-08-21") AS tmp WHERE NOT EXISTS (SELECT EMAIL, PASSWORD FROM login.login_info WHERE EMAIL = ? OR PASSWORD = ?);';
        connection.query(q, [req.body.email, req.body.password, req.body.email, req.body.password], 
        (err, rows) => {
            if (err) throw err; 
            if(rows.affectedRows == 0){
                res.send(false);
            }
            else if(rows.affectedRows == 1){
                res.send(true);
            }
            else{
                res.send(false);
            }
            connection.release();
        }
        );
    });
});
app.listen(5001, 'localhost', ()=>{
    console.log("Example app listening");
});


