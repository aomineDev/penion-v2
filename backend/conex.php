<?php 
// Creando conexion
$conex = new mysqli('localhost', 'nibbhvsh_pixeland', 'team@pixeland', 'nibbhvsh_penion');
if (!$conex) {
	echo "<script> alert('No se pudo conectar con la base de datos)</script>";
} 
$conex->set_charset("utf8");
?>