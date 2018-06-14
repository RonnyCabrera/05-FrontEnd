class Usuario {

    constructor(
        public nombre: string,
        public apellido: string,
        public ulrImagen: string
    ) {
    }
}

const ronny = new Usuario(
    'Ronny',
    'Cabrera',
    'https://i.blogs.es/0dbb63/pokemon-go/1366_2000.jpg');
console.log('Usuario', ronny);

function cambiarImagen() {
    const etiquetaImagen: any = document.getElementById('imagen');
    etiquetaImagen.src = ronny.ulrImagen;
}

function cambiarColor() {
    const etiquetaBorde: any = document.getElementById('tablita');
    etiquetaBorde.style.borderColor = "red";
}

function cambiarColorClase() {
    const etiquetaBorde: any = document.getElementById('tablita');
    etiquetaBorde.className = etiquetaBorde.class + "borde-azul";
}

function crearContenido() {
    const etiquetaContenedora: any = document.getElementById("contenido");

    const parrafo = document.createElement("p");
    parrafo.innerHTML = "Hola Amigo";

    const imagen = document.createElement("img");
    imagen.src = ronny.ulrImagen;

    etiquetaContenedora.appendChild(parrafo);
    etiquetaContenedora.appendChild(imagen);
}