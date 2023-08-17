$(document).ready(function() {
    function fetchLiveData() {
        $.ajax({
            url: 'fetch_live_data.php', // PHP script to fetch data
            method: 'GET',
            dataType: 'json', // Change the data type to JSON
            success: function(data) {
                const labels = data.map(entry => entry.time);
                const values = data.map(entry => entry.temperature);

                const ctx = document.getElementById('myChart').getContext('2d');
                const myChart = new Chart(ctx, {
                    type: 'line', // Use a line chart for better visualization of timestamps
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Temperature',
                            data: values,
                            borderColor: 'rgba(75, 192, 192, 1)', // Adjust colors as needed
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
        });
    }

    // Fetch live data and update chart every 5 seconds
    setInterval(fetchLiveData, 5000);
});