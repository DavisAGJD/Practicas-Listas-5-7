class GestorPalabras {
    constructor() {
        this.palabras = [];
    }

    // Añadir una palabra y su versión invertida a la lista de palabras almacenadas
    almacenarPalabra(original, invertida) {
        this.palabras.push({ original, invertida });
    }

    // Obtener todas las palabras almacenadas
    obtenerPalabras() {
        return this.palabras;
    }
}

export default GestorPalabras;