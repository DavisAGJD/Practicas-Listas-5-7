import ListaDoblementeEnlazada from "./Lista.js";

class GestorListasPorLetra {
    constructor() {
        this.listadoPalabras = new ListaDoblementeEnlazada();
        this.listasPorLetra = {};
    }

    agregarPalabra(palabra) {
        this.listadoPalabras.agregar(palabra); 

        const letraInicial = palabra.charAt(0).toUpperCase(); 
        if (!this.listasPorLetra[letraInicial]) {
            this.listasPorLetra[letraInicial] = new ListaDoblementeEnlazada(); 
        }
        this.listasPorLetra[letraInicial].agregar(palabra);
    }

    obtenerListas() {
        return {
            ordenadas: this.listasPorLetra,
            enOrden: this.listadoPalabras 
        };
    }
}

export default GestorListasPorLetra;
