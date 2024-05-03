let estudiantes=[];

// constructor

function Estudiante(p1, p2, p3, p4, p5, p6, p7, p8, p9){
    this.nombre=p1;
    this.edad=p2;
    this.genero=p3;
    this.correo=p4;
    this.password=p5;
    this.materia1=p6;
    this.materia2=p7;
    this.materia3=p8;
    this.facultad=p9;
}



// validacion

function esValido(unAlumno){
    let validacion = true;

      if(unAlumno.nombre==""){
        validacion = false;
      }
      if(unAlumno.edad==""){
        validacion = false;
      }

    return validacion;

}




//registrar
function register(){
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputGenero = document.getElementById("txtGenero").value;
    let inputCorreo = document.getElementById("txtCorreo").value;
    let inputPassword = document.getElementById("txtPassword").value;
    let inputMateria1 = document.getElementById("txtMateria1").value;
    let inputMateria2 = document.getElementById("txtMateria2").value;
    let inputMateria3 = document.getElementById("txtMateria3").value;
    let inputFacultad = document.getElementById("txtFacultad").value;
    
    let nuevoAlumno = new Estudiante(inputNombre, inputEdad, inputCorreo, inputGenero, inputPassword, inputMateria1, inputMateria2, inputMateria3, inputFacultad);
    if(esValido(nuevoAlumno)){
        estudiantes.push(nuevoAlumno);
    console.log(estudiantes);

    } else 
    alert("por favor de completar los campos para el registro")


}



function init() {

    let estudiante1 = new Estudiante("Samuel", 24);
    estudiantes.push(estudiante1);
    console.log(estudiante1);

}

window.onload=init; // espera a renderizar el html