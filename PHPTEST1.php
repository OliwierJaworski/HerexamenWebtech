<?php
$host = "127.0.0.1";
$port = "5432";
$dbname = "pynqdata";
$user = "postgres";
$password = "OliExam";

// Establish a connection
$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if ($conn) {
    echo "Connected to the database successfully!";
} else {
    echo "Connection failed.";
}
?>