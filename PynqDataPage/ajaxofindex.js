function fetchData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://server-of-oliwier.pxl.bjth.xyz/PynqDataPage/index.js");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var data = xhr.responseText;
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
        container.textContent = JSON.stringify(data, null, 2);
    }

    fetchData(displayData);
});