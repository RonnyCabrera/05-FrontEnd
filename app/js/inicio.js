var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, ulrImagen) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ulrImagen = ulrImagen;
    }
    return Usuario;
}());
var ronny = new Usuario('Ronny', 'Cabrera', 'https://i.blogs.es/0dbb63/pokemon-go/1366_2000.jpg');
console.log('Usuario', ronny);
function cambiarImagen() {
    var etiquetaImagen = document.getElementById('imagen');
    etiquetaImagen.src = ronny.ulrImagen;
}
function cambiarColor() {
    var etiquetaBorde = document.getElementById('tablita');
    etiquetaBorde.style.borderColor = "red";
}
function cambiarColorClase() {
    var etiquetaBorde = document.getElementById('tablita');
    etiquetaBorde.className = etiquetaBorde.class + "borde-azul";
}
function crearContenido() {
    var etiquetaContenedora = document.getElementById("contenido");
    var parrafo = document.createElement("p");
    parrafo.innerHTML = "Hola Amigo";
    var imagen = document.createElement("img");
    imagen.src = ronny.ulrImagen;
    etiquetaContenedora.appendChild(parrafo);
    etiquetaContenedora.appendChild(imagen);
}
