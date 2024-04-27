let estudiantes=[];

// constructor

function Estudiante(p1, p2){
    this.nombre=p1;
    this.edad=p2;
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
    let nuevoAlumno = new Estudiante(inputNombre,inputEdad);
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