document.addEventListener('DOMContentLoaded', () => {
    const garden = document.querySelector('.garden');

    // Función para Obtener el Color de la Flor Según el Tipo
    function getFlowerColor(type) {
        switch(type) {
            case 'tulip':
            case 'tulip-draw':
                return '#800080'; // Morado
            case 'rose':
                return 'red'; // Rojo
            case 'sunflower':
                return 'yellow'; // Amarillo
            default:
                return 'white';
        }
    }

    // Función para Crear una Flor
    function createFlower(type) {
        const flower = document.createElement('div');
        flower.classList.add('flower', type);
        flower.style.setProperty('--flower-color', getFlowerColor(type));

        const head = document.createElement('div');
        head.classList.add('head');

        const stem = document.createElement('div');
        stem.classList.add('stem');

        flower.appendChild(head);
        flower.appendChild(stem);

        // Posición Horizontal Aleatoria
        flower.style.left = `${Math.random() * 80 + 10}%`; // Entre 10% y 90%

        garden.appendChild(flower);
    }

    // Función para Crear la Animación de Dibujo del Tulipán
    function createTulipDrawing() {
        const tulipDraw = document.createElement('div');
        tulipDraw.classList.add('flower', 'tulip-draw');
        tulipDraw.style.setProperty('--flower-color', getFlowerColor('tulip-draw'));
        tulipDraw.style.animation = 'drawTulip 3s ease-in forwards'; // Animación de Dibujo

        const head = document.createElement('div');
        head.classList.add('head');

        const stem = document.createElement('div');
        stem.classList.add('stem');

        tulipDraw.appendChild(head);
        tulipDraw.appendChild(stem);

        // Posición Central
        tulipDraw.style.left = '50%';

        garden.appendChild(tulipDraw);
    }

    // Secuencia de Creación de Flores
    // 3 Tulipanes Morados
    createFlower('tulip');
    setTimeout(() => createFlower('tulip'), 2000);
    setTimeout(() => createFlower('tulip'), 4000);

    // 3 Rosas Rojas
    setTimeout(() => createFlower('rose'), 6000);
    setTimeout(() => createFlower('rose'), 8000);
    setTimeout(() => createFlower('rose'), 10000);

    // 3 Girasoles
    setTimeout(() => createFlower('sunflower'), 12000);
    setTimeout(() => createFlower('sunflower'), 14000);
    setTimeout(() => createFlower('sunflower'), 16000);

    // Animación de Dibujo del Tulipán Morado
    setTimeout(() => createTulipDrawing(), 18000);

    // Añadir el Mensaje
    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = "Me gustas mucho, pero me gusta más los sueños que tenemos. Disfruta de tus flores virtuales 🌷";
    document.body.appendChild(message);
});
