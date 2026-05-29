
let productoSeleccionado = "";


// ABRIR MODAL
function comprar(producto){

    productoSeleccionado = producto;

    document
    .getElementById("modal")
    .style.display = "flex";
}


// CERRAR MODAL
function cerrarModal(){

    document
    .getElementById("modal")
    .style.display = "none";
}


// IR A PRODUCTOS
function irProductos(){

    document
    .getElementById("monos")
    .scrollIntoView({
        behavior:"smooth"
    });

}


// FORMULARIO
document
.getElementById("pedidoForm")
.addEventListener("submit", async function(e){

    e.preventDefault();


    // OBTENER DATOS
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


    // OBJETO DATOS
    let datos = {

        producto: productoSeleccionado,

        cantidad: cantidad,

        nombre: nombre,

        telefono: telefono,

        direccion: direccion,

        pago: pago

    };


    // URL APPS SCRIPT
    let apiURL =
    "https://script.google.com/macros/s/AKfycbwJNUqWO7xiW1W4TGpA_VRO5PboTaGMq67yVPek23pUnFYT61od9yK5v_9ymeREUkS8/exec";


    try{


// ENVIAR A GOOGLE SHEETS
try {

    const response = await fetch(apiURL, {

        method: "POST",

        body: JSON.stringify(datos),

        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        }

    });

    console.log("Enviado correctamente");

} catch(error){

    console.error("ERROR FETCH:", error);

}

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


        // TU NÚMERO
        let url =
        "https://wa.me/50235700133?text=" +
        encodeURIComponent(mensaje);


        // ABRIR WHATSAPP
        window.open(url, "_blank");


        // ALERTA
        alert("Pedido enviado correctamente");


        // CERRAR MODAL
        cerrarModal();


        // LIMPIAR FORMULARIO
        document
        .getElementById("pedidoForm")
        .reset();

    }


    catch(error){

        console.error(error);

        alert("Error al enviar pedido");

    }

});
