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

    // Fetching the data and displaying
    while ($row = pg_fetch_assoc($result)) {
        $temperature = $row['temperature'];
        echo "<p>temperature: $temperature</p>";
    }

    // Closing connection
    pg_close($conn);
    ?>
</div>

</body>
</html>