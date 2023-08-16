<?php
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// Check if the data is not empty
if (!empty($data)) {
    // Convert the data array to a string
    $dataString = print_r($data, true);

    // Write the data to the temperature.txt file
    file_put_contents('temperature.txt', $dataString);

    // Send a response indicating success
    $response = array("message" => "Data written to temperature.txt successfully");
    echo json_encode($response);
} else {
    // Send a response indicating no data received
    $response = array("message" => "No data received");
    echo json_encode($response);
}
?>