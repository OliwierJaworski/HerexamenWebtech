<?php
// index.php

// Check if the user is trying to access temperature.php
if ($_SERVER['REQUEST_URI'] === '/temperature.php') {
    header('Location: /var/www/api/v1/temperature.php');
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Test</title>
    <link href="StyleGelukt.css" rel="stylesheet">
</head>
<body>
<div class="menu-bar">
    <ul>
        <li class="active"><a href="index.html">back</a></li>
    </ul>
</div>

<div class="data-container">
    <?php
    // Connecting to the PostgreSQL database
    $host = '127.0.0.1';
    $port = 5432;
    $dbname = 'testdb';
    $user = 'postgres';
    $password = 'oli';

    $conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

    if (!$conn) {
        die("Connection failed: " . pg_last_error());
    }

    // Performing SQL query
    $query = "SELECT number FROM Testnumbers";
    $result = pg_query($conn, $query);

    if (!$result) {
        die("Query failed: " . pg_last_error());
    }

    // Fetching the data and displaying
    while ($row = pg_fetch_assoc($result)) {
        $number = $row['number'];
        echo "<p>Number: $number</p>";
    }

    // Closing connection
    pg_close($conn);
    ?>
</div>

</body>
</html>