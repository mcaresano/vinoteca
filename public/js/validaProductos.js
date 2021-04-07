let form = document.querySelector ("form.formulario");

form.addEventListener("submit", (e)=>{
   var errores =[];
   var nombre = document.getElementById("producto").value;
   var descripcion = document.getElementById("textArea").value;
   var precio = document.getElementById ("precio").value;    
   var imagen = document.getElementById("imagen").value;

   if (nombre =="" || descripcion =="" || precio =="" ){
      errores.push(" Debe completar todos los campos");
   } else {
        if (imagen == ""){
            errores.push("Debe seleccionar una imagen");
        } else { 
            if (!(/\.(jpeg|jpg|png|gif)$/i).test(imagen)) {
                errores.push('El archivo a adjuntar no es una imagen');
            }
        }
     }

   if (errores.length >0){
      e.preventDefault();   
      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i< errores.length; i++){
          ulErrores.innerHTML = "<li>" + errores[i] + "</li>"
      }
    } else {
            alert("Se cargara su nuevo producto");
    }
})



