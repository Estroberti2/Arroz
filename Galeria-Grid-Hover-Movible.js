// function allowDrop(ev) {
//     ev.preventDefault();
// }
  
// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }
  
// function drop(ev) {
//     ev.preventDefault();
//     if(ev.target.id === "coso"){
//         var data = ev.dataTransfer.getData("text");
//         ev.target.appendChild(document.getElementById(data));
//     }
    
// }
// const agregable = document.querySelector("#imagen-1")
// agregable.addEventListener("click", (ev=>{
    
// }))
// function agregar(){
//     document.getElementById('buttoninput').onclick = function () {
//         document.getElementById('filesinput').click();}
// }
function init(){
    var ingresar = document.getElementById('ingresar-imagen');
    ingresar.addEventListener('change', mostrarImagen, false);
}
function mostrarImagen(evento){
    var file = evento.target.files[0];
    var reader = new FileReader();
    reader.onload = function(evento) {
        var galeria = document.getElementById('galeria');
        var imagen = document.createElement('img');
        imagen.src = evento.target.result;
        galeria.appendChild(imagen);
    }
    reader.readAsDataURL(file);
}
window.addEventListener('load', init, false);
