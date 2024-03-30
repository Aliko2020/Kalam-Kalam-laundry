    const express = require('express');
    const mysql = require('mysql');
    const cors = require('cors');

    const app = express();
    app.use(cors());
    app.use(express.json());

    const db = mysql.createConnection({
        host: "localhost", 
        user: "root",
        password: "", 
        database: "signup"
    });

    app.post('/login', (req, res) => { 
        const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?"; // Updated placeholders
        db.query(sql, [req.body.email, req.body.password], (err, data) => { 
            if (err) {
                return res.json({ error: err.message }); 
            }
            if(data.length > 0){
                return res.json("success")
            }else{
                return res.json("Fialed")
            }
        });
    });

    app.post('/signup', (req, res) => { 
        const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)"; 
        const values = [
            req.body.name,
            req.body.email,
            req.body.password
        ];
        db.query(sql, values, (err, data) => { 
            if (err) {
                return res.json({ error: err.message }); 
            }
            return res.json(data);
        });
    });


    app.listen(8080, () => {
        console.log("Server is listening on port 4022");
    });
