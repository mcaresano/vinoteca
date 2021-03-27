var email = document.getElementById("email").value;
var pasword = document.getElementById('pasword').value;

console.log(email);
console.log (pasword);

function validarCamposLogin(){

    if (email == "") {
        if (pasword == ""){
            alert("complete los campos")
        }else {
            alert ("Se requiere un email de acceso")
        }
    } 


}