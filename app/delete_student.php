<?php
// delete_student.php

header('Content-Type: application/json');

// Conexión a la base de datos (ajusta los parámetros según tu configuración)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sistema_registros";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Conexión fallida: " . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];

    // Eliminar el registro
    $sql = "DELETE FROM estudiantes WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => $stmt->error]);
    }

    $stmt->close();
}

$conn->close();
?>