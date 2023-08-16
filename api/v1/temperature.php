<?php
// Get the JSON data from the incoming request
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// Extract the temperature value from the data
$temperature = $data['temperature'];

// Connect to the PostgreSQL database
$host = '127.0.0.1';
$port = 5432;
$dbname = 'testdb';
$user = 'postgres';
$password = 'oli';

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
    die("Connection failed: " . pg_last_error());
}

// Insert temperature data into the database
$query = "INSERT INTO numbers (number) VALUES ($temperature)";
$result = pg_query($conn, $query);

if (!$result) {
    die("Insert failed: " . pg_last_error());
}

// Close the database connection
pg_close($conn);

// Send a response back to the PYNQ device
$response = array("message" => "Temperature data inserted successfully");
echo json_encode($response);
?>