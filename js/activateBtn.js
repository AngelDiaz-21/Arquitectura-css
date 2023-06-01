const btnEnviar = document.getElementById("btnBuscar");

function verificar(valor) {
    if (valor.length >= 1) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}