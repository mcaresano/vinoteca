var form = document.querySelector("form.agregarProducto");
var button = document.getElementsByClassName("buttonAdd");

     form.addEventListener("submit", (e)=>{
    e.preventDefault();
       var cartCount = document.getElementById("cart-count").value;
       var cantidad = document.getElementById('cantidad').value;
       alert ("Entra al submit " + cartCount + cantidad);
       document.getElementById("cart-count").innerHTML = cartCount +=cantidad;
    })
    


