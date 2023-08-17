
error_reporting(E_ALL);
ini_set('display_errors', 1);
<?php
// Get the JSON data from the incoming request
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// Connect to the PostgreSQL database
$host = '127.0.0.1';
$port = 5432;
$dbname = 'pynqdb';
$user = 'postgres';
$password = 'oli';

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
die("Connection failed: " . pg_last_error());
}

// Insert temperature data into the database
$query = "INSERT INTO SendData (temperature) VALUES ($data)";
$result = pg_query($conn, $query);

if (!$result) {
die("Insert failed: " . pg_last_error());
}

// Close the database connection
pg_close($conn);

// Append the received data to the text file
file_put_contents('received.txt', $body . "\n", FILE_APPEND);

// Send a response back to the client
$response = array("message" => "Temperature data inserted successfully");
echo json_encode($response);
?>