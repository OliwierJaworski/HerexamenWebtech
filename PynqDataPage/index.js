const {Client} = require('pg')
const express = require('express');
const app = express();
const port = 3000;

const client = new Client({
    user: "postgres",
    password:"oli",
    host: "127.0.0.1",
    port: 5432,
    database: "pynqdb"
})
app.get('/data',(req, res)=>{
    client.connect()
        .then(()=> console.log("Connected succesfully"))
        .then(()=>client.query("SELECT time, temperature FROM SendData ORDER BY id DESC LIMIT 20"))
        .then(results => console.table(results.rows))
        .then(results => {const jsonData = results.rows;
            res.json(jsonData);})


        .catch(e => {console.error(e);
            res.status(500).json({error: 'An error occurred'});
        })
        .finally(()=> client.end());
});
app.listen(port, () => {console.log('Server is listening at localhost port 3000');});