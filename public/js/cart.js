    let cartList = document.getElementsByClassName("carrito-list");
    let countProd = document.getElementsByClassName("carrito-count").value;

    cartList.addEventListener("click", function (){
        if (countProd =="0"){
            cartList.class = "disabled"
        } else {
            cartList.class = "enabled"
        }
    })
