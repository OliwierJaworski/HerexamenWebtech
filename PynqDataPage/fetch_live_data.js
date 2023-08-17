document.addEventListener("DOMContentLoaded", function() {
    function fetchData() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://server-of-oliwier.pxl.bjth.xyz/PynqDataPage/");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    displayData(data);
                } else {
                    console.error("Error fetching data");
                }
            }
        };
        xhr.send();
    }

    function displayData(data) {
        var container = document.getElementById("data-container");
        alert(container);
        var html = "<h2>Last 20 Temperature Readings</h2>";
        html += "<table><tr><th>Time</th><th>Temperature</th></tr>";
        for (var i = 0; i < data.length; i++) {
            html += "<tr><td>" + data[i].time + "</td><td>" + data[i].temperature + "</td></tr>";
        }
        html += "</table>";
        container.innerHTML = html;
    }

    fetchData();
});