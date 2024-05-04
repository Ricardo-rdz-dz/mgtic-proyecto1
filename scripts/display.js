console.log("estos son los registros:");


function displayCards() {
    let card = ""; 
    for (let i = 0; i < estudiantes.length; i++) {
        let estudiante = estudiantes[i]; // 
        card += `
        <div>
           
            <h2>${estudiante.nombre}</h2> 
            <p>Edad: ${estudiante.edad}</p> 
            <p>Género: ${estudiante.genero}</p> 
            <p>Correo: ${estudiante.correo}</p> 
            <p>Materias: ${estudiante.materia1}, ${estudiante.materia2}, ${estudiante.materia3}</p> 
            <p>Facultad: ${estudiante.facultad}</p> 
        </div>
        </div>
        `;
    }
    document.getElementById("listaEstudiantes").innerHTML = card; 
}