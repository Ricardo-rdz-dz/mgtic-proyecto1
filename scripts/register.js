let estudiantes = [];

// Constructor
function Estudiante(p1, p2, p3, p4, p5, p6, p7, p8, p9) {
    this.nombre = p1;
    this.edad = p2;
    this.genero = p3;
    this.correo = p4;
    this.password = p5;
    this.materia1 = p6;
    this.materia2 = p7;
    this.materia3 = p8;
    this.facultad = p9;
}

// Validacion
function esValido(unAlumno) {
    if (unAlumno.nombre == "") {
        alert("Por favor, completa el campo de Nombre.");
        return false;
    }
    if (unAlumno.edad == "") {
        alert("Por favor, completa el campo de Edad.");
        return false;
    }
    if (unAlumno.genero == "") {
        alert("Por favor, completa el campo de Genero.");
        return false;
    }
    if (unAlumno.correo == "") {
        alert("Por favor, completa el campo de Correo.");
        return false;
    }
    if (unAlumno.password == "") {
        alert("Por favor, completa el campo de Password.");
        return false;
    }
    if (unAlumno.materia1 == "") {
        alert("Por favor, completa el campo de Materia 1.");
        return false;
    }
    if (unAlumno.materia2 == "") {
        alert("Por favor, completa el campo de Materia 2.");
        return false;
    }
    if (unAlumno.materia3 == "") {
        alert("Por favor, completa el campo de Materia 3.");
        return false;
    }
    if (unAlumno.facultad == "") {
        alert("Por favor, selecciona una Facultad de la lista.");
        return false;
    }
    return true;
}

// Registrar
function register() {
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputGenero = document.getElementById("txtGenero").value;
    let inputCorreo = document.getElementById("txtCorreo").value;
    let inputPassword = document.getElementById("txtPassword").value;
    let inputMateria1 = document.getElementById("txtMateria1").value;
    let inputMateria2 = document.getElementById("txtMateria2").value;
    let inputMateria3 = document.getElementById("txtMateria3").value;
    let inputFacultad = document.getElementById("Facultad").value;

    let nuevoAlumno = new Estudiante(inputNombre, inputEdad, inputGenero, inputCorreo, inputPassword, inputMateria1, inputMateria2, inputMateria3, inputFacultad);
    if (esValido(nuevoAlumno)) {
        insertToDataBase(nuevoAlumno);
        estudiantes.push(nuevoAlumno);
        displayCards();
    } else {
        alert("Por favor, completa todos los campos para el registro.");
    }
}

// Insert to DataBase
function insertToDataBase(nuevoAlumno) {
    $.ajax({
        url: "./app/register.php",
        method: "POST",
        data: {
            nombre: nuevoAlumno.nombre,
            edad: nuevoAlumno.edad,
            genero: nuevoAlumno.genero,
            correo: nuevoAlumno.correo,
            password: nuevoAlumno.password,
            materia1: nuevoAlumno.materia1,
            materia2: nuevoAlumno.materia2,
            materia3: nuevoAlumno.materia3,
            facultad: nuevoAlumno.facultad
        },
        dataType: "json",
        success: function(response) {
            console.log(response);
            setTimeout(function() {
                // Your code to run after the timeout
                console.log("This runs after a 2-second delay.");
            }, 2000);
        },
        error: function(xhr, status, error) {
            console.log("error de conexion");
        }
    });
}

// Define displayCards function
function displayCards() {
    const tableBody = document.querySelector('#tablaEstudiantes tbody');
    tableBody.innerHTML = ''; // Limpiar el contenido anterior
    estudiantes.forEach((estudiante, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${estudiante.nombre}</td>
            <td>${estudiante.edad}</td>
            <td>${estudiante.genero}</td>
            <td>${estudiante.correo}</td>
            <td>${estudiante.facultad}</td>
            <td><button class="eliminar-btn" onclick="eliminarRegistro(${index})">Eliminar</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Eliminar registro
function eliminarRegistro(index) {
    estudiantes.splice(index, 1);
    displayCards();
}

// Cargar datos iniciales si los hay
document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes cargar los datos iniciales si es necesario
    // estudiantes = ...
    displayCards();
});