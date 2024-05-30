// Constructor
function Facultad(nombre, campus) {
    this.nombre = nombre;
    this.campus = campus;
}

// Registro
function registerFacultad() {
    let inputNombref = document.getElementById("txtNombref").value;
    let inputCampus = document.getElementById("txtCampus").value;

    if (inputNombref === "" || inputCampus === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let nuevaFacultad = new Facultad(inputNombref, inputCampus);
    saveFacultad(nuevaFacultad);
}

// Guardar Facultad en la Base de Datos
function saveFacultad(facultad) {
    $.ajax({
        url: './app/register_facultades.php',
        method: 'POST',
        data: {
            nombre_facultad: facultad.nombre,
            campus: facultad.campus
        },
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                alert("Facultad registrada correctamente.");
                // Limpia los campos del formulario
                document.getElementById("txtNombref").value = "";
                document.getElementById("txtCampus").value = "";
                setTimeout(function() {
                    location.reload(); // Refresh the page after a 2-second delay
                }, 1000);
            } else {
                alert("Error al registrar la facultad: " + response.message);
            }
        },
        error: function(xhr, status, error) {
            alert("Error de conexión: " + error);
        }
    });
}

// Cargar Facultades
function cargarFacultades() {
    $.ajax({
        url: './app/get_facultades.php',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            const selectFacultad = $('#Facultad');
            selectFacultad.empty(); // Limpiar el contenido anterior
            response.forEach(facultad => {
                const option = `<option value="${facultad.id}">${facultad.nombre_facultad}</option>`;
                selectFacultad.append(option);
            });
        },
        error: function(xhr, status, error) {
            console.log("Error al obtener las facultades:", error);
        }
    });
}

// Inicialización
$(document).ready(function() {
    cargarFacultades();
});