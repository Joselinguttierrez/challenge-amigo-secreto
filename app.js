// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar nombres
let listaAmigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigosElemento = document.getElementById("listaAmigos");

    // Validaciones
    //Si no se digito un nombre
    if (nombre === "") {
        alert(" Por favor, ingrese un nombre válido.");
        return;
    }
    //Si desea agregar mas de 50 amigos
    if (listaAmigos.length >= 50) {
        alert(" Solo puedes agregar hasta 50 amigos.");
        return;
    }
    // Si ya se encuentra el mismo nombre en la lista para evitar duplicados
    if (listaAmigos.includes(nombre)) {  
        alert(" Este nombre ya se encuentra en la lista. Por favor, use otro nombre.");
        return;
    }

    // Agregar nombre a la lista
    listaAmigos.push(nombre);
    input.value = ""; // Limpiar el input

    // Mostrar los nombres en la lista
    listaAmigosElemento.innerHTML = "";
    listaAmigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        listaAmigosElemento.appendChild(item);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert(" Agrega al menos un nombre antes de sortear.");
        return;
    }

    // Elegir un nombre aleatorio
    const indiceGanador = Math.floor(Math.random() * listaAmigos.length);
    const nombreGanador = listaAmigos[indiceGanador];

    // Mostrar resultado en la lista de resultados
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li> EL AMIGO SECRETO ES: <strong>${nombreGanador}</strong> 🎉</li>`;
}