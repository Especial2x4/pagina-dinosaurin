
// Seleccionamos los elementos del DOM
const lightbox = document.getElementById('lightbox');
const imgAmpliada = document.getElementById('img-ampliada');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn'); // Asegúrate de que coincida con la clase en tu HTML

//alert("¡Hola! El archivo JS se ha cargado con éxito.");

// Buscamos todas las imágenes dentro de la galería
const imagenes = document.querySelectorAll('.obra img');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        imgAmpliada.src = imagen.src;
        captionText.innerHTML = imagen.alt;
    });
});

// Cerrar al hacer clic en la "X"
closeBtn.onclick = () => {
    lightbox.style.display = 'none';
};

// MEJORA: Cerrar solo si haces clic en el fondo oscuro
lightbox.addEventListener('click', (e) => {
    // Si el clic fue directamente en el fondo (el contenedor lightbox)
    // y no en la imagen o el texto, entonces cerramos.
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
