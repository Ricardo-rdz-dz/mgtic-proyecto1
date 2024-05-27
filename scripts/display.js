$(document).ready(function() {
    cargarEstudiantes();
});

function cargarEstudiantes() {
    $.ajax({
        url: './app/get_students.php',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            const tableBody = $('#tablaEstudiantes tbody');
            tableBody.empty(); // Limpiar el contenido anterior
            response.forEach(estudiante => {
                const row = `
                    <tr>
                        <td>${estudiante.nombre}</td>
                        <td>${estudiante.edad}</td>
                        <td>${estudiante.genero}</td>
                        <td>${estudiante.correo}</td>
                        <td>${estudiante.facultad}</td>
                        <td><button class="eliminar-btn" onclick="eliminarRegistro(${estudiante.id})">Eliminar</button></td>
                    </tr>
                `;
                tableBody.append(row);
            });
        },
        error: function(xhr, status, error) {
            console.log("Error al obtener los datos:", error);
        }
    });
}

function eliminarRegistro(id) {
    if (confirm("¿Estás seguro de que deseas eliminar este registro?")) {
        $.ajax({
            url: './app/delete_student.php',
            method: 'POST',
            data: { id: id },
            success: function(response) {
                if (response.status === 'success') {
                    alert("Registro eliminado correctamente.");
                    cargarEstudiantes(); // Volver a cargar la tabla después de eliminar el registro
                } else {
                    alert("Error al eliminar el registro: " + response.message);
                }
            },
            
        });
    }
}