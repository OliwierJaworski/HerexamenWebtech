const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password:"oli",
    host: "127.0.0.1",
    port: 5432,
    database: "pynqdb"
})
client.connect()
    .then(()=> console.log("Connected succesfully"))
    .then(()=>client.query("SELECT time, temperature FROM SendData ORDER BY time DESC LIMIT 20"))
    .then(results => console.table(results.rows))
    .catch(e => console.log(e))
    .finally(()=> client.end())