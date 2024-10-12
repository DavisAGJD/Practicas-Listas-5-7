import Nodo from "./Nodo.js";

class ListaDoblementeEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

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

    esPalindromo() {
        let actualDelante = this.cabeza;
        let actualDetras = this.cola;

        // Recorrer desde ambos extremos y comparar los caracteres
        while (actualDelante && actualDetras) {
            if (actualDelante.caracter !== actualDetras.caracter) {
                return false; // Si hay una discrepancia, no es palíndromo
            }

            // Si se encuentran en el mismo nodo o lo cruzan, terminar
            if (actualDelante === actualDetras || actualDelante.siguiente === actualDetras) {
                break;
            }

            actualDelante = actualDelante.siguiente;
            actualDetras = actualDetras.anterior; 
        }
        return true;
    }
}

export default ListaDoblementeEnlazada;
