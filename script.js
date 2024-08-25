document.addEventListener('DOMContentLoaded', () => {
    const garden = document.querySelector('.garden');

    function createTulip() {
        const tulip = document.createElement('div');
        tulip.classList.add('tulip');
        
        const stem = document.createElement('div');
        stem.classList.add('stem');
        
        tulip.style.left = `${Math.random() * 100}%`;
        tulip.style.backgroundColor = getRandomColor();

        tulip.appendChild(stem);
        garden.appendChild(tulip);
    }

    function getRandomColor() {
        const colors = ['#FF6347', '#FFD700', '#DA70D6', '#32CD32', '#1E90FF', '#FF69B4', '#800080']; // Añadido color morado
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Crear múltiples tulipanes
    for (let i = 0; i < 30; i++) { // Aumentado a 30 tulipanes
        createTulip();
    }

    // Añadir el mensaje
    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = "Me gustas mucho, pero me gusta más los sueños que tenemos. Disfruta de tus flores virtuales 🌷";
    document.body.appendChild(message);
});
