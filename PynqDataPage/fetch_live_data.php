<?php
// Connecting to the PostgreSQL database
$host = '127.0.0.1';
$port = 5432;
$dbname = 'pynqdb';
$user = 'postgres';
$password = 'oli';

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
    die("Connection failed: " . pg_last_error());
}

// Performing SQL query
$query = "SELECT temperature FROM SendData";
$result = pg_query($conn, $query);

if (!$result) {
    die("Query failed: " . pg_last_error());
}

$data = array();
while ($row = pg_fetch_assoc($result)) {
    $data[] = $row['temperature'];

}

// Closing connection
pg_close($conn);

header('Content-Type: application/json');
echo json_encode($data);
?>