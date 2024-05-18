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
    if (isset($_POST["nombre"], $_POST["edad"], $_POST["genero"], $_POST["correo"], $_POST["password"], $_POST["materia1"], $_POST["materia2"], $_POST["materia3"], $_POST["facultad"])) {
        $nombre = $_POST["nombre"];
        $edad = $_POST["edad"];
        $genero = $_POST["genero"];
        $correo = $_POST["correo"];
        $password = $_POST["password"];
        $materia1 = $_POST["materia1"];
        $materia2 = $_POST["materia2"];
        $materia3 = $_POST["materia3"];
        $facultad = $_POST["facultad"];

        // Insert data into database
        $stmt_insert_usuarios = $conn->prepare("INSERT INTO estudiantes (nombre, edad, genero, correo, password, materia1, materia2, materia3, facultad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        if ($stmt_insert_usuarios) {
            $stmt_insert_usuarios->bind_param("sisssssss", $nombre, $edad, $genero, $correo, $password, $materia1, $materia2, $materia3, $facultad);
            $stmt_insert_usuarios->execute();
            if ($stmt_insert_usuarios->affected_rows > 0) {
                echo json_encode(array("success" => true));
            } else {
                echo json_encode(array("success" => false, "message" => "Failed to insert record."));
            }
            $stmt_insert_usuarios->close();
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