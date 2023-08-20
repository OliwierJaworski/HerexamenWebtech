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
    function displayData(data) {
        var container = document.getElementById("data-container");
        var html = "<h2>Last 20 Temperature Readings</h2>";
        html += "<table><tr><th>Time</th><th>Temperature</th></tr>";

        // Loop through each data object and format it
        for (var i = 0; i < data.length; i++) {
            var time = data[i].time; // Time in JSON format
            var temperature = data[i].temperature;
            html += "<tr><td>" + time + "</td><td>" + temperature + "</td></tr>";
        }

        html += "</table>";
        container.innerHTML = html;
    }

    fetchData(displayData);
});