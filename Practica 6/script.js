import ListaDoblementeEnlazada from "./Clases/Lista.js";
import GestorPalabras from "./Clases/Gestor.js";

const listaCaracteres = new ListaDoblementeEnlazada();
const gestorPalabras = new GestorPalabras();

document.getElementById('reverseWordBtn').addEventListener('click', () => {
    const palabra = document.getElementById('wordInput').value;

    // Limpiar la lista de caracteres previa
    listaCaracteres.cabeza = null;
    listaCaracteres.cola = null;

    // Agregar cada carácter de la palabra a la lista
    for (let i = 0; i < palabra.length; i++) {
        listaCaracteres.agregar(palabra[i]);
    }

    // Obtener la palabra invertida
    const palabraInvertida = listaCaracteres.obtenerPalabraInvertida();
    
    // Mostrar la palabra invertida actual
    document.getElementById('reversedWord').textContent = palabraInvertida;

    // Almacenar la palabra original e invertida
    gestorPalabras.almacenarPalabra(palabra, palabraInvertida);

    // Actualizar la lista de palabras almacenadas
    actualizarListaPalabras();
});

// Función para actualizar la lista de palabras almacenadas en el DOM
function actualizarListaPalabras() {
    const listaElement = document.getElementById('storedWords');
    listaElement.innerHTML = ''; // Limpiar lista previa

    gestorPalabras.obtenerPalabras().forEach(palabra => {
        const li = document.createElement('li');
        li.textContent = `Original: ${palabra.original} | Invertida: ${palabra.invertida}`;
        listaElement.appendChild(li);
    });
}