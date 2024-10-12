import GestorListasPorLetra from "./Clases/Gestor.js";

const gestorListas = new GestorListasPorLetra();

document.getElementById('addWordBtn').addEventListener('click', () => {
    const palabra = document.getElementById('wordInput').value;

    if (palabra) {
        gestorListas.agregarPalabra(palabra);
        actualizarListas();
    } else {
        alert('Por favor, ingrese una palabra.');
    }
});

function actualizarListas() {
    const contenedorListas = document.getElementById('letterLists');
    contenedorListas.innerHTML = ''; 

    // Obtener las listas
    const { ordenadas, enOrden } = gestorListas.obtenerListas();

    // Mostrar la lista en orden de inserción
    const divListaOrden = document.createElement('div');
    divListaOrden.classList.add('word-list');

    const tituloOrden = document.createElement('h4');
    tituloOrden.textContent = `Lista de Palabras en Orden de Inserción`;
    divListaOrden.appendChild(tituloOrden);

    const ulOrden = document.createElement('ul');
    let actual = enOrden.cabeza;

    while (actual) {
        const li = document.createElement('li');
        li.textContent = actual.palabra; 
        ulOrden.appendChild(li);
        actual = actual.siguiente;
    }

    divListaOrden.appendChild(ulOrden);
    contenedorListas.appendChild(divListaOrden);

    // Mostrar listas organizadas por letra
    for (const letra in ordenadas) {
        const divLista = document.createElement('div');
        divLista.classList.add('word-list');

        const titulo = document.createElement('h4');
        titulo.textContent = `Lista para la letra: ${letra}`;
        divLista.appendChild(titulo);

        const ul = document.createElement('ul');
        actual = ordenadas[letra].cabeza;

        while (actual) {
            const li = document.createElement('li');
            li.textContent = actual.palabra;
            ul.appendChild(li);
            actual = actual.siguiente; 
        }

        divLista.appendChild(ul);
        contenedorListas.appendChild(divLista);
    }
}
