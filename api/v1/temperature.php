<?php
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// Check if the 'temperature' key exists in the received data
if (isset($data['temperature'])) {
    $temperature = $data['temperature'];

    // Connect to the PostgreSQL database
    $host = '127.0.0.1';
    $port = 5400;
    $dbname = 'testdb';
    $user = 'postgres';
    $password = 'oli';

    $conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

    if (!$conn) {
        die("Connection failed: " . pg_last_error());
    }

    // Insert temperature data into the database
    $query = "INSERT INTO SendData (temperature) VALUES ($1)";
    $result = pg_query_params($conn, $query, array($temperature));

    if (!$result) {
        die("Insert failed: " . pg_last_error());
    }

    // Close the database connection
    pg_close($conn);

    // Send a success response
    $response = array("message" => "Temperature data inserted successfully");
    echo json_encode($response);
} else {
    // Send a response indicating missing temperature data
    $response = array("message" => "Temperature data missing");
    echo json_encode($response);
}
?>