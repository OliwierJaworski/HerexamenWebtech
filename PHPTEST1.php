<!DOCTYPE html>
<html>
<head>
</head>
<title>My Page</title>
<body>

<h1>Welcome to my page</h1>

<?php
$servername = "127.0.0.1";
$username = "postgres";
$password = "OliExam";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
</body>
</html>