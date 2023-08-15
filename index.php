<!DOCTYPE html>
<html>
<head>
</head>
<title>My Page</title>
<body>

<h1>Welcome to my page</h1>

<?php
// Connecting to the PostgreSQL database
$host = '127.0.0.1';
$port = 5432;
$dbname = 'pynqdata';
$user = 'postgres';
$password = 'OliE';

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
</body>
</html>