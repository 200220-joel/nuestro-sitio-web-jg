// Función para crear corazones animados
function crearCorazones() {
    const corazones = 50;
    for (let i = 0; i < corazones; i++) {
        const corazon = document.createElement('div');
        corazon.innerHTML = '❤️';
        corazon.className = 'corazon';
        corazon.style.left = Math.random() * 100 + 'vw';  // Posición aleatoria en el ancho de la pantalla
        corazon.style.top = Math.random() * 100 + 'vh';   // Posición aleatoria en el alto de la pantalla
        corazon.style.animationDelay = Math.random() * 5 + 's';  // Retraso aleatorio para la animación
        corazon.style.animationDuration = (Math.random() * 3 + 5) + 's';  // Duración aleatoria
        corazon.style.fontSize = (Math.random() * 2 + 1) + 'rem';  // Tamaño aleatorio para cada corazón
        document.body.appendChild(corazon);
    }
}

// Llamar la función para crear los corazones
crearCorazones();

// Mostrar el ramo
function mostrarRamo() {
    document.getElementById('ramoContainer').style.display = 'flex';
    document.getElementById('botones').style.opacity = '0';
    setTimeout(() => document.getElementById('botones').style.display = 'none', 300);
}

// Ocultar el ramo
function ocultarRamo() {
    document.getElementById('ramoContainer').style.display = 'none';
    document.getElementById('botones').style.display = 'block';
    setTimeout(() => document.getElementById('botones').style.opacity = '1', 10);
}

// Mostrar las fotos
function mostrarFotos() {
    document.getElementById('fotosContainer').style.display = 'flex';
    document.getElementById('botones').style.opacity = '0';
    setTimeout(() => document.getElementById('botones').style.display = 'none', 300);
}

// Ocultar las fotos
function ocultarFotos() {
    document.getElementById('fotosContainer').style.display = 'none';
    document.getElementById('botones').style.display = 'block';
    setTimeout(() => document.getElementById('botones').style.opacity = '1', 10);
}



