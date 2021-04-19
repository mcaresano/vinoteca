let form = document.querySelector ("form.formulario");

form.addEventListener("submit", (e)=>{
   var errores =[];
   var apellido = document.getElementById("apellido").value;
   var nombre = document.getElementById("nombre").value;
   var email = document.getElementById("email").value;
   var pasword = document.getElementById ("password").value;    
   var imagen = document.getElementById("imagen").value;
   var ulErrores = document.querySelector("div.errores ul");
   
   ulErrores.innerHTML =""

   if (apellido =="" || nombre =="" ){
      errores.push(" Debe completar todos los campos");
   } else {
            if (imagen == ""){
                errores.push("Debe seleccionar una imagen");
            } else { 
                if (!(/\.(jpg|png|gif)$/i).test(imagen)) {
                    errores.push('El archivo a adjuntar no es una imagen');
                }
            }
            
            if (email ==""){
                errores.push("Debe Ingresar un email");
            } else {        
                if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
                   } else {
                    errores.push("La dirección de email es incorrecta!");
                   }
            }
            
            console.log("pasword: " + pasword);
            if (pasword =="" ){
                errores.push("Debe Ingresar una clave de acceso");
            } else {
                
                console.log ("entra al pasword" + pasword.length)
                 if (pasword.length < 6){
                    errores.push("la Clave debe tener al menos 6 caracteres");
                }
                 if (isNaN(pasword)==true || /^([1-9])*$/.test(pasword)==false ){
                     errores.push("Debe ingresar un caracter numerico")
                 } 
            }
    
          }
  

   if (errores.length >0){
      e.preventDefault();   
     
      for (let i = 0; i< errores.length; i++){
          ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
      }
    } else {
            alert("Se ha cargado el Usuario - Ahora debe loguearse para ingresar");
    }
})