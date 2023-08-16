<?php
// Specify the full path to the directory where you want to create the file
$filePath = '/var/www/html/HerexamenWebtech/api/v1/temperature.txt';

// Get the JSON data from the incoming request
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// Open the file in write mode
$fileHandle = fopen($filePath, 'w');

if (!$fileHandle) {
    die("Failed to open file for writing.");
}

// Write the temperature data to the file
$temperature = $data['temperature'];
fwrite($fileHandle, $temperature);

// Close the file handle
fclose($fileHandle);

// Respond with a success message
$response = array('message' => 'Data written to temperature.txt successfully');
echo json_encode($response);
?>