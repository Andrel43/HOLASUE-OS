document.addEventListener('DOMContentLoaded', () => {
    const garden = document.querySelector('.garden');

    function createTulip() {
        const tulip = document.createElement('div');
        tulip.classList.add('tulip');

        const leaf = document.createElement('div');
        leaf.classList.add('tulip-leaf');
        tulip.appendChild(leaf);

        garden.appendChild(tulip);
    }

    // Mostrar el mensaje desde el inicio
    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = "Me gustas mucho, pero me gusta más los sueños que tenemos. Disfruta de tus flores virtuales 🌷";
    document.body.appendChild(message);

    // Secuencia de animaciones
    // Aparecen 3 tulipanes morados
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            createTulip();
        }
    }, 1000);
});
