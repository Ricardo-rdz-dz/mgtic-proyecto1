$(document).ready(function() {
    function displayCards(estudiantes) {
        let card = ""; 
        for (let i = 0; i < estudiantes.length; i++) {
            let estudiante = estudiantes[i]; 
            card += `
            <div>
                <h2>${estudiante.nombre}</h2> 
                <p>Edad: ${estudiante.edad}</p> 
                <p>Género: ${estudiante.genero}</p> 
                <p>Correo: ${estudiante.correo}</p> 
                <p>Materias: ${estudiante.materia1}, ${estudiante.materia2}, ${estudiante.materia3}</p> 
                <p>Facultad: ${estudiante.facultad}</p> 
            </div>
            `;
        }
        document.getElementById("listaEstudiantes").innerHTML = card; 
    }

    function searchToDataBase() {
        $.ajax({
            url: "./app/get_students.php", // Corrected URL
            type: "GET",
            dataType: "json",
            success: function(response) {
                console.log("Response from server: ", response);
                if (Array.isArray(response)) {
                    displayCards(response);
                } else {
                    console.log("Unexpected response format:", response);
                    document.getElementById("listaEstudiantes").innerHTML = '<p>Error al cargar los usuarios.</p>';
                }
            },
            error: function(xhr, status, error) {
                console.log("Error de conexion: ", error);
                document.getElementById("listaEstudiantes").innerHTML = '<p>Error al cargar los usuarios.</p>';
            }
        });
    }

    function init() {
        searchToDataBase();
    }

    window.onload = init; 
});