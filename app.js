// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = [];

let listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo(){
    const elemento = document.getElementById("amigo");
    let amigo = elemento.value;

    if (amigo == '') {
        alert('El campo nombre no puede estar vacio');
        return;
    }

    arrayAmigos.push(amigo);
    mostrarAmigos()
    elemento.value = '';
}


function mostrarAmigos(){
    listaAmigos.innerHTML = "";
    arrayAmigos.forEach(amigo => {
        const itemAmigo = document.createElement("li");
        itemAmigo.textContent = amigo;
        listaAmigos.appendChild(itemAmigo);
        resultado.innerHTML = "";
    });
};


function sortearAmigo() {
    let numArray = Math.floor(Math.random() * arrayAmigos.length);
    let amigoElegido = arrayAmigos[numArray];
    const itemResultado = document.createElement("li");
    itemResultado.textContent = 'El amigo secreto es: ' + amigoElegido;
    resultado.appendChild(itemResultado);
    listaAmigos.innerHTML = "";
    arrayAmigos = [];
}
