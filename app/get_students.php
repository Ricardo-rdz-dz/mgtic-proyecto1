<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow HTTP methods GET, POST, and OPTIONS
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Allow the Content-Type and Authorization headers in CORS requests
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if ($conn->connect_error) {
        die("Error de conexion con la base de datos: " . $conn->connect_error);
    }

    // Modify query to join with the faculty table
    $query = "
        SELECT estudiantes.id, estudiantes.nombre, estudiantes.edad, estudiantes.genero, estudiantes.correo, 
               estudiantes.password, estudiantes.materia1, estudiantes.materia2, estudiantes.materia3, 
               facultades.nombre_facultad AS facultad 
        FROM estudiantes
        JOIN facultades ON estudiantes.facultad = facultades.id
    ";
    $result = $conn->query($query);

    $students = array();
    while ($row = $result->fetch_assoc()) {
        $students[] = array(
            "id" => $row["id"],
            "nombre" => $row["nombre"],
            "edad" => $row["edad"],
            "genero" => $row["genero"],
            "correo" => $row["correo"],
            "password" => $row["password"],
            "materia1" => $row["materia1"],
            "materia2" => $row["materia2"],
            "materia3" => $row["materia3"],
            "facultad" => $row["facultad"]
        );
    }

    echo json_encode($students);

    $conn->close();
} else {
    echo json_encode(array("success" => false, "error" => "Solicitud no valida"));
}
?>