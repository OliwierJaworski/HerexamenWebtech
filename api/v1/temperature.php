ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

<?php
$body = file_get_contents("php://input");
echo "Received data: $body<br>";
$data = json_decode($body, true);

if (!$data) {
    die("Error decoding JSON data.");
}

$temperature = isset($data['temperature']) ? $data['temperature'] : null;

if ($temperature === null) {
    die("Temperature data missing in JSON.");
}

$currentTimestamp = date('Y-m-d H:i:s');

$host = '127.0.0.1';
$port = 5432;
$dbname = 'pynqdb';
$user = 'postgres';
$password = 'HeelMoeilijkeWachtWoordVoorDatabase';

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");
if (!$conn)
{
    die("Connection failed: " . pg_last_error());
}

$query = "INSERT INTO SendData (temperature, time) VALUES ($1, $2)";
$result = pg_query_params($conn, $query, array($temperature, $currentTimestamp));
if (!$result)
{
    die("Insert failed: " . pg_last_error());
}

pg_close($conn);

$response = array("message" => "Temperature data inserted successfully");
echo json_encode($response);
?>