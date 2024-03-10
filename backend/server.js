const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Corrected line

const db = mysql.createConnection({
    host: "", // Make sure to fill in your database host
    user: "root",
    password: "Aliko@1734!", // Be cautious with passwords in code!
    database: "signup"
});

app.post('/signup', (req, res) => { // Corrected route
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)"; // Updated placeholders
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, values, (err, data) => { // Spread the values array
        if (err) {
            return res.json({ error: err.message }); // Provide more informative error message
        }
        return res.json(data);
    });
});

app.listen(8080, () => {
    console.log("Server is listening on port 4022");
});
