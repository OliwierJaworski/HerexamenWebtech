document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
    alert("fetching data...");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://server-of-oliwier.pxl.bjth.xyz/PynqDataPage/server.js%22);
    xhr.onreadystatechange = readyChange;
    alert("Sending request to server.js...");
    xhr.send();
}

function readyChange() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        alert("Received data...");
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            displayData(data);
        } else {
            console.error("Error fetching data");
        }
    }
}

function displayData(data) {
    alert("Displaying data...");
    var container = document.getElementById("data-container");
    var html = "<h2>Last 20 Temperature Readings</h2>";
    html += "<table><tr><th>Time</th><th>Temperature</th></tr>";
    for (var i = 0; i < data.length; i++) {
        html += "<tr><td>" + data[i].time + "</td><td>" + data[i].temperature + "</td></tr>";
    }
    html += "</table>";
    container.html(html);
}