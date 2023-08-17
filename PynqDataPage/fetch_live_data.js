const { Pool } = require('pg');
const Chart = require('chart.js');

// PostgreSQL connection settings
const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'pynqdb',
    password: 'oli',
    port: 5432,
});

// Fetch data from the database
async function fetchData() {
    try {
        const result = await pool.query('SELECT time, temperature FROM SendData ORDER BY time DESC LIMIT 20');
        return result.rows;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Create the graph
async function createGraph() {
    const data = await fetchData();

    const labels = data.map(entry => entry.time);
    const values = data.map(entry => entry.temperature);

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false,
            }],
        },
    });
}

createGraph();