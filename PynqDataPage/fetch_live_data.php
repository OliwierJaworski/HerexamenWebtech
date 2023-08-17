<?php
$host = '127.0.0.1';
$port = 5432;
$dbname = 'pynqdb';
$user = 'postgres';
$password = 'oli';

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
    die("Connection failed: " . pg_last_error());
}

$query = "SELECT time, temperature FROM SendData ORDER BY time DESC LIMIT 20";
$result = pg_query($conn, $query);

if (!$result) {
    die("Query failed: " . pg_last_error());
}

$data = array();
while ($row = pg_fetch_assoc($result)) {
    $data[] = array(
        "time" => $row['time']->format('Y-m-d H:i:s'),
        "temperature" => $row['temperature']
    );
}

pg_close($conn);

header('Content-Type: application/json');
echo json_encode($data);
?>