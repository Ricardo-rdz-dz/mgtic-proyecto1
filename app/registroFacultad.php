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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["nombre_facultad"], $_POST["campus"])) {
        $nombre_facultad = $_POST["nombre_facultad"];
        $campus = $_POST["campus"];

        // Insert data into the correct table
        $stmt_insert_facultades = $conn->prepare("INSERT INTO facultades (nombre_facultad, campus) VALUES (?, ?)");
        if ($stmt_insert_facultades) {
            $stmt_insert_facultades->bind_param("ss", $nombre_facultad, $campus);
            $stmt_insert_facultades->execute();
            if ($stmt_insert_facultades->affected_rows > 0) {
                echo json_encode(array("success" => true));
            } else {
                echo json_encode(array("success" => false, "message" => "Failed to insert record."));
            }
            $stmt_insert_facultades->close();
        } else {
            echo json_encode(array("success" => false, "message" => "Failed to prepare statement.", "error" => $conn->error));
        }
    } else {
        echo json_encode(array("success" => false, "message" => "Required fields are missing."));
    }
    $conn->close();
    exit();
} else {
    echo json_encode(array("success" => false, "message" => "Invalid request method."));
}

?>