<!DOCTYPE html>
<html>
<head>
</head>
<title>My Page</title>
<body>

<h1>Welcome to my page</h1>

<?php
$host = "127.0.0.1";
$port = "5432";
$dbname = "pynqdata";
$user = "postgres";
$password = "OliExam";

// Establish a connection
$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

// Check connection
if (!$conn) {
    die("Connection failed: " . pg_last_error());
}
echo "Connected successfully";
?>
</body>
</html>