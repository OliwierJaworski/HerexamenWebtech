const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;


const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'pynqdb',
    password: 'oli',
    port: 5432
});

app.get('/server.js', async (req, res) => {
    try {
        alert("Getting data from postgres...");
        const query = 'SELECT time, temperature FROM SendData ORDER BY time DESC LIMIT 20';
        const rows = await pool.query(query);
        alert("data = " + rows);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(Server is running on port ${port});
});