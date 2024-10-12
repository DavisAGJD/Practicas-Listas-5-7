import Nodo from "./Nodo.js";

class ListaDoblementeEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

    // Añadir un carácter al final de la lista
    agregar(caracter) {
        const nuevoNodo = new Nodo(caracter);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.cola;
            this.cola = nuevoNodo;
        }
    }

    // Obtener la palabra en orden inverso recorriendo desde la cola
    obtenerPalabraInvertida() {
        let actual = this.cola;
        let palabraInvertida = '';
        while (actual) {
            palabraInvertida += actual.caracter;
            actual = actual.anterior;
        }
        return palabraInvertida;
    }
}

export default ListaDoblementeEnlazada;