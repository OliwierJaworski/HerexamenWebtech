$(document).ready(function() {
    function fetchLiveData() {
        $.ajax({
            url: 'fetch_live_data.php',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log(data);

                const labels = data.map(entry => entry.date_column);
                const values = data.map(entry => entry.temperature_column);

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
        });
    }


    setInterval(fetchLiveData, 5000);
});