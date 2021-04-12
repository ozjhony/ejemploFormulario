var Nombre=document.getElementById("Nombre");
var Apellido=document.getElementById("Apellido");
var Celular=document.getElementById("Celular");
var Email=document.getElementById("Email");
var Carrera=document.getElementById("Carrera");
var form = document.getElementById('form');
var fecha=document.getElementById("fecha");

console.log(form);



form.addEventListener("submit", e=>{
     e.preventDefault();
  if(Nombre.value.length<3){
        alert("ingrese un nombre valido mayor a 3 caracteres ");
    }

   else if(Apellido.value.length<3){
        alert("ingrese un apellido valido mayor a 3 caracteres")
   } 
   else if(Email.value.length<1){
    alert("el campo email es requerido");
   }
   else if(isNaN(Celular.value)){
       alert("el campo debe ser numerico");
   }
   else if(Celular.value.length<1){
       alert("por favor ingresa tu numero celular");
   }
   else if(Cedula.value.length<4 || isNaN(Cedula.value)){
    alert("Esta cedula no es valida o el valor no es numerico");
   }
   
   else if(Carrera.value.length<1){
    alert("El campo carrera es requerido");
   }
    else{
     alert("formulario enviado");
}
})








function  prueba(){
    alert("ppp");
}

