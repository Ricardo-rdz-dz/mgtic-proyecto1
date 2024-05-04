//constructor

function Facultades(Nombref, Campus){
   this.nombref=   Nombref;
   this.campus=Campus;
}

//validacion



//registro

function register(){
    let inputNombref = document.getElementById("txtNombref");
    let inputCampus = document.getElementById("txtCampus")

    let nuevaFacultad = new Facultades(inputNombref,inputCampus);
    saveItems(nuevaFacultad); //this fn is on storeManager


}

function init() {

    let estudiante1 = new Estudiante("Samuel", 24);
    estudiantes.push(estudiante1);
    console.log(estudiante1);

}