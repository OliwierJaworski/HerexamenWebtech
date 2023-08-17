$(document).ready(function() {
    function fetchStaticData() {

        const staticData = [
            { date_column: "2023-08-01 12:00:00", temperature_column: 25 },
            { date_column: "2023-08-02 12:00:00", temperature_column: 28 },
            { date_column: "2023-08-02 12:00:00", temperature_column: 55 },
            { date_column: "2023-08-02 12:00:00", temperature_column: 33 },
            { date_column: "2023-08-02 12:00:00", temperature_column: 22 },
        ];

        const labels = staticData.map(entry => entry.date_column);
        const values = staticData.map(entry => entry.temperature_column);

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Temperature',
                    data: values,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    
    fetchStaticData();
});