$host = '127.0.0.1';
$port = 5432;
$dbname = 'pynqdb';
$user = 'postgres';
$password = 'oli';

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
die("Connection failed: " . pg_last_error());
}

$query = "SELECT temperature, time FROM SendData"; // Include the 'time' column
$result = pg_query($conn, $query);

if (!$result) {
die("Query failed: " . pg_last_error());
}

$data = array();
while ($row = pg_fetch_assoc($result)) {
$data[] = array(
"temperature_column" => $row['temperature'],
"date_column" => $row['time']
);
}

pg_close($conn);

header('Content-Type: application/json');
echo json_encode($data);