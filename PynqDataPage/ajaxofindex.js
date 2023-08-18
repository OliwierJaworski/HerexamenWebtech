function fetchData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://server-of-oliwier.pxl.bjth.xyz/PynqDataPage/fetch_live_data.php");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText); // Parse the JSON response
                callback(data);
            } else {
                console.error("Error fetching data");
            }
        }
    };
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function() {
    fetchData(displayData);

    // Automatically update the chart every 5 minutes (300,000 milliseconds)
    setInterval(function() {
        fetchData(displayData);
    }, 300000); // 5 minutes in milliseconds
});

function displayData(data) {
    var container = document.getElementById("temperature-chart");

    // Extract time and temperature data from the fetched data
    var labels = data.map(entry => entry.time);
    var temperatures = data.map(entry => entry.temperature);

    var ctx = container.getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature',
                data: temperatures,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        parser: 'iso', // Use Luxon's ISO parser
                        unit: 'day',   // Set the time unit you want to display
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}