<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow HTTP methods GET, POST, and OPTIONS
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Allow the Content-Type and Authorization headers in CORS requests
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

$sql = "SELECT id, nombre_facultad, campus FROM facultades";
$result = $conn->query($sql);

$facultades = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $facultades[] = $row;
    }
}

$conn->close();
echo json_encode($facultades);
?>