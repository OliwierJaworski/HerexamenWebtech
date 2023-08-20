<?php
// Connecting to the PostgreSQL database
$host = '127.0.0.1';
$port = 5432;
$dbname = 'pynqdb';
$user = 'postgres';
$password = 'HeelMoeilijkeWachtWoordVoorDatabase';

//verbinding maken met db
$pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");
if (!$pdo) 
{
    die("Connection failed");
}
//query uitvoere
$query = "SELECT time, temperature FROM senddata ORDER BY time DESC LIMIT 20";
$preparedQuery = $pdo->prepare($query);
//als geen verbinding gemaakt kan worden
if (!$preparedQuery->execute()) 
{
    die("Query failed");
}

$data = array();
while ($row = $preparedQuery->fetch(PDO::FETCH_ASSOC)) 
{
    $data[] = array(
        "time" => $row['time'],
        "temperature" => $row['temperature']
    );
}
//stuur data naar ajax
header('Content-Type: application/json');
echo json_encode($data);
?>