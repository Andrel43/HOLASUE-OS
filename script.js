document.addEventListener('DOMContentLoaded', () => {
    const garden = document.querySelector('.garden');

    function createTulip(size = 'normal') {
        const tulip = document.createElement('div');
        tulip.classList.add('tulip');
        if (size === 'giant') {
            tulip.classList.add('giant');
        }

        const stem = document.createElement('div');
        stem.classList.add('stem');
        if (size === 'giant') {
            stem.classList.add('giant');
        }

        tulip.appendChild(stem);
        garden.appendChild(tulip);
        
        tulip.style.left = `${Math.random() * 60 + 20}%`;
    }

    // Crear tulipanes en secuencia
    setTimeout(() => {
        createTulip('giant'); // Primero tulipán gigante
    }, 1000);

    setTimeout(() => {
        createTulip(); // Segundo tulipán
        createTulip();
    }, 4000);

    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            createTulip();
        }
    }, 7000);

    // Añadir el mensaje
    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = "Me gustas mucho, pero me gusta más los sueños que tenemos. Disfruta de tus flores virtuales 🌷";
    document.body.appendChild(message);
});
