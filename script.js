let productoSeleccionado = "";


function comprar(producto){

    productoSeleccionado = producto;

    document
    .getElementById("modal")
    .style.display = "flex";
}


function cerrarModal(){

    document
    .getElementById("modal")
    .style.display = "none";
}


function irProductos(){

    document
    .getElementById("monos")
    .scrollIntoView({
        behavior:"smooth"
    });
}


document
.getElementById("pedidoForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    let nombre =
    document.getElementById("nombre").value;

    let telefono =
    document.getElementById("telefono").value;

    let direccion =
    document.getElementById("direccion").value;

    let cantidad =
    document.getElementById("cantidad").value;

    let pago =
    document.getElementById("pago").value;


    let datos = {

        producto: productoSeleccionado,

        cantidad: cantidad,

        nombre: nombre,

        telefono: telefono,

        direccion: direccion,

        pago: pago
    };


    // URL DE APPS SCRIPT
    let apiURL =
    "https://script.google.com/macros/s/AKfycbxUjscDJVnUk1Dzc7eOkm1NwVrGEDa8XV8TGu4nQW2VLIOF2duS-Ph8ECDbn2P5B8s0/exec";


    // ENVIAR A GOOGLE SHEETS
    await fetch(apiURL, {

        method:"POST",

        body: JSON.stringify(datos)

    });


    // MENSAJE WHATSAPP
    let mensaje =
`Hola Little Princess GT 👑

Nuevo Pedido:

Producto: ${productoSeleccionado}

Cantidad: ${cantidad}

Nombre: ${nombre}

Teléfono: ${telefono}

Dirección: ${direccion}

Método de pago: ${pago}`;


    let url =
    "https://wa.me/50212345678?text=" +
    encodeURIComponent(mensaje);


    window.open(url, "_blank");


    alert("Pedido enviado correctamente");


    cerrarModal();

});