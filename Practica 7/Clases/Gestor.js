import ListaDoblementeEnlazada from "./Lista.js";

class GestorPalindromos {
    constructor() {
        this.lista = null;
        this.palindromos = new ListaDoblementeEnlazada(); 
        this.noPalindromos = new ListaDoblementeEnlazada(); 
    }

    agregarPalabra(palabra) {
        this.lista = new ListaDoblementeEnlazada(); 
        for (let caracter of palabra) {
            this.lista.agregar(caracter.toLowerCase()); 
        }
    }

    verificarPalindromo(palabra) {
        const esPalindromo = this.lista.esPalindromo(); 
        if (esPalindromo) {
            this.palindromos.agregar(palabra); 
        } else {
            this.noPalindromos.agregar(palabra); 
        }
        return esPalindromo;
    }

    obtenerPalindromos() {
        return this.palindromos;
    }

    obtenerNoPalindromos() {
        return this.noPalindromos; 
    }
}

export default GestorPalindromos;
