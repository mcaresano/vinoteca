window.addEventListener("load", ()=>{
    let form = document.querySelector ("form.formulario");

    form.addEventListener("submit", (e)=>{
    

    var email = document.getElementById("email").value;
    var pasword = document.getElementById('pasword').value;
    
    if (email =="" || pasword ==""){
        e.preventDefault();
        alert(" Complete los campos");
        
    }
    
    })
})


