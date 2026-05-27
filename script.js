function comprar(producto){

    let telefono = "50235700133";

    let mensaje =
    "Hola Little Princess GT 👑%0A%0A" +
    "Quiero comprar:%0A" +
    "• " + producto;

    let url =
    "https://wa.me/" +
    telefono +
    "?text=" +
    mensaje;

    window.open(url, "_blank");
}


function irProductos(){

    document
    .getElementById("productos")
    .scrollIntoView({
        behavior:"smooth"
    });

}