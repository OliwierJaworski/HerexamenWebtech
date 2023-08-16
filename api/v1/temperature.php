<?php
$body = file_get_contents("php://input");
$data = json_decode($body, true);
print_r($data);
?>