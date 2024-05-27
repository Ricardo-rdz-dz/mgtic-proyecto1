$(document).ready(function() {
    cargarFacultades();
});

function cargarFacultades() {
    $.ajax({
        url: './app/get_facultades.php', // Asegúrate de que la URL apunte al archivo PHP correcto
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            const tableBody = $('#tablaFacultades tbody');
            tableBody.empty(); // Limpiar el contenido anterior
            response.forEach(facultad => {
                const row = `
                    <tr>
                        <td>${facultad.id}</td>
                        <td>${facultad.nombre_facultad}</td>
                        <td>${facultad.campus}</td>
                        <td><button class="eliminar-btn" onclick="eliminarFacultad(${facultad.id})">Eliminar</button></td>
                    </tr>
                `;
                tableBody.append(row);
            });
        },
        error: function(xhr, status, error) {
            alert("Error de conexión: " + error);
        }
    });
}

function registerFacultad() {
    let nombreFacultad = document.getElementById("txtNombref").value;
    let campus = document.getElementById("txtCampus").value;

    if (nombreFacultad === "" || campus === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    $.ajax({
        url: './app/register_facultades.php', // Asegúrate de que la URL apunte al archivo PHP correcto
        method: 'POST',
        data: {
            nombre_facultad: nombreFacultad,
            campus: campus
        },
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                alert("Facultad registrada correctamente.");
                // Limpia los campos del formulario
                document.getElementById("txtNombref").value = "";
                document.getElementById("txtCampus").value = "";
                cargarFacultades(); // Volver a cargar la tabla de facultades
            } else {
                alert("Error al registrar la facultad: " + response.message);
            }
        },
        error: function(xhr, status, error) {
            alert("Error de conexión: " + error);
        }
    });
}

function eliminarFacultad(id) {
    if (confirm("¿Estás seguro de que deseas eliminar esta facultad?")) {
        $.ajax({
            url: './app/delete_facultad.php', // Asegúrate de que la URL apunte al archivo PHP correcto
            method: 'POST',
            data: { id: id },
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    alert("Facultad eliminada correctamente.");
                    cargarFacultades(); // Volver a cargar la tabla de facultades
                } else {
                    alert("Error al eliminar la facultad: " + response.message);
                }
            },
            error: function(xhr, status, error) {
                alert("Error de conexión: " + error);
            }
        });
    }
}$(document).ready(function() {
    cargarFacultades();
});

function cargarFacultades() {
    $.ajax({
        url: './app/get_facultades.php', // Asegúrate de que la URL apunte al archivo PHP correcto
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            const tableBody = $('#tablaFacultades tbody');
            tableBody.empty(); // Limpiar el contenido anterior
            response.forEach(facultad => {
                const row = `
                    <tr>
                        <td>${facultad.id}</td>
                        <td>${facultad.nombre_facultad}</td>
                        <td>${facultad.campus}</td>
                        <td><button class="eliminar-btn" onclick="eliminarFacultad(${facultad.id})">Eliminar</button></td>
                    </tr>
                `;
                tableBody.append(row);
            });
        },
        error: function(xhr, status, error) {
            alert("Error de conexión: " + error);
        }
    });
}

function registerFacultad() {
    let nombreFacultad = document.getElementById("txtNombref").value;
    let campus = document.getElementById("txtCampus").value;

    if (nombreFacultad === "" || campus === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    $.ajax({
        url: './app/registroFacultad.php', // Asegúrate de que la URL apunte al archivo PHP correcto
        method: 'POST',
        data: {
            nombre_facultad: nombreFacultad,
            campus: campus
        },
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                alert("Facultad registrada correctamente.");
                // Limpia los campos del formulario
                document.getElementById("txtNombref").value = "";
                document.getElementById("txtCampus").value = "";
                cargarFacultades(); // Volver a cargar la tabla de facultades
            } else {
                alert("Error al registrar la facultad: " + response.message);
            }
        },
        error: function(xhr, status, error) {
            alert("Error de conexión: " + error);
        }
    });
}

function eliminarFacultad(id) {
    if (confirm("¿Estás seguro de que deseas eliminar esta facultad?")) {
        $.ajax({
            url: './app/delete_facultades.php', // Asegúrate de que la URL apunte al archivo PHP correcto
            method: 'POST',
            data: { id: id },
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    alert("Facultad eliminada correctamente.");
                    cargarFacultades(); // Volver a cargar la tabla de facultades
                } else {
                    alert("Error al eliminar la facultad: " + response.message);
                }
            },
            error: function(xhr, status, error) {
                alert("Error de conexión: " + error);
            }
        });
    }
}