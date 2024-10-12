import GestorPalindromos from "./Clases/Gestor.js";

const gestor = new GestorPalindromos();

document.getElementById('checkPalindromeBtn').addEventListener('click', () => {
    const palabra = document.getElementById('wordInput').value;

    if (palabra) {
        gestor.agregarPalabra(palabra);
        const esPalindromo = gestor.verificarPalindromo(palabra);

        if (esPalindromo) {
            alert(`"${palabra}" es un palíndromo.`);
        } else {
            alert(`"${palabra}" no es un palíndromo.`);
        }

        // Actualizar listas de palíndromos y no palíndromos en el DOM
        actualizarListaPalindromos();
        actualizarListaNoPalindromos();
    } else {
        alert('Por favor, ingrese una palabra.');
    }
});

function actualizarListaPalindromos() {
    const listaPalindromos = document.getElementById('palindromeList');
    listaPalindromos.innerHTML = ''; // Limpiar la lista

    let actual = gestor.obtenerPalindromos().cabeza;
    while (actual) {
        const li = document.createElement('li');
        li.textContent = actual.caracter;
        listaPalindromos.appendChild(li);
        actual = actual.siguiente;
    }
}

function actualizarListaNoPalindromos() {
    const listaNoPalindromos = document.getElementById('notPalindromeList');
    listaNoPalindromos.innerHTML = ''; // Limpiar la lista

    let actual = gestor.obtenerNoPalindromos().cabeza;
    while (actual) {
        const li = document.createElement('li');
        li.textContent = actual.caracter;
        listaNoPalindromos.appendChild(li);
        actual = actual.siguiente;
    }
}
