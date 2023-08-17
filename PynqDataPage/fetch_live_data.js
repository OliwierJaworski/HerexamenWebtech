$(document).ready(function() {
    $('#fetchDataForm').submit(function(event) {
        event.preventDefault();

        $.ajax({
            url: 'fetch_graph_data.php',
            method: 'POST',
            dataType: 'json',
            success: function(data) {
                const labels = data.map(entry => entry.time);
                const values = data.map(entry => entry.temperature);

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
    });
});