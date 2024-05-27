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
    if (isset($_POST["id"])) {
        $id = $_POST["id"];

        // Delete record from database
        $stmt_delete_facultad = $conn->prepare("DELETE FROM facultades WHERE id = ?");
        if ($stmt_delete_facultad) {
            $stmt_delete_facultad->bind_param("i", $id);
            $stmt_delete_facultad->execute();
            if ($stmt_delete_facultad->affected_rows > 0) {
                echo json_encode(array("success" => true));
            } else {
                echo json_encode(array("success" => false, "message" => "Failed to delete record."));
            }
            $stmt_delete_facultad->close();
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