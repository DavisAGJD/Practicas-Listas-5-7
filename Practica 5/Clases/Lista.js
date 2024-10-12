import Nodo from "./Nodo.js";

class ListaDoblementeEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

    agregar(palabra) {
        const nuevoNodo = new Nodo(palabra);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.cola;
            this.cola = nuevoNodo;
        }
    }

    obtenerPalabras() {
        let actual = this.cabeza;
        let palabrasStr = ''; 
        while (actual) {
            palabrasStr += `${actual.palabra} `; 
            actual = actual.siguiente; 
        }
        return palabrasStr.trim();
    }

    obtenerPalabrasReversa() {
        let actual = this.cola;
        let palabrasStr = ''; 
        while (actual) {
            palabrasStr += `${actual.palabra} `;
            actual = actual.anterior; 
        }
        return palabrasStr.trim(); 
    }
}

export default ListaDoblementeEnlazada;
