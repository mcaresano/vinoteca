
let form = document.querySelector ("form.formulario");

form.addEventListener("submit", (e)=>{
   var errores =[];
   var apellido = document.getElementById("apellido").value;
   var nombre = document.getElementById("nombre").value;
   var email = document.getElementById("email").value;
   var pasword = document.getElementById ("password").value;    
   var imagen = document.getElementById("imagen").value;

   if (apellido =="" || nombre =="" ){
      errores.push(" Debe completar todos los campos");
   } else {
            console.log(imagen);
            if (imagen == ""){
                errores.push("Debe seleccionar una imagen");
            } else { 
                if (!(/\.(jpg|png|gif)$/i).test(imagen)) {
                    errores.push('El archivo a adjuntar no es una imagen');
                }
            }
            console.log (email);
            if (email ==""){
                errores.push("Debe Ingresar un email");
            } else {        
                if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
                    errores.push ("Ingrese un email válido");
                }
            }
            console.log(pasword);
            if (pasword =="" ){
                errores.push("Debe Ingresar una clave de acceso");
            } else {
                 if (pasword.length >=6 || isNaN(pasword)){
                    errores.push("la Clave debe tener al menos 6 caracteres numéricos");
                }
            }
    
          }
  

   if (errores.length >0){
      e.preventDefault();   
      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i< errores.length; i++){
          ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
      }
    } else {
            alert("Usuario Cargado");
    }
})