<?php

$serverName="localhost";
$userName="root";
$password="";
$dbName="sistema_registros";


$conn = new mysqli($serverName,$userName,$password,$dbName);

if ($conn->connect_error){
    die("Error de conexion:" .$conn->connect_error);

}

?>