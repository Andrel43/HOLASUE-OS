document.addEventListener('DOMContentLoaded', () => {
    const garden = document.querySelector('.garden');

    function createTulip() {
        const tulip = document.createElement('div');
        tulip.classList.add('tulip');
        garden.appendChild(tulip);
    }

    function createRose() {
        const rose = document.createElement('div');
        rose.classList.add('rose');
        garden.appendChild(rose);
    }

    function createSunflower() {
        const sunflower = document.createElement('div');
        sunflower.classList.add('sunflower');
        garden.appendChild(sunflower);
    }

    function createFinalTulip() {
        const finalTulip = document.createElement('div');
        finalTulip.classList.add('final-tulip');

        const stem = document.createElement('div');
        stem.classList.add('stem');

        const flower = document.createElement('div');
        flower.classList.add('flower');

        finalTulip.appendChild(stem);
        finalTulip.appendChild(flower);
        garden.appendChild(finalTulip);
    }

    // Secuencia de animaciones
    // Aparecen 3 tulipanes morados
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            createTulip();
        }
    }, 1000);

    // Aparecen 3 rosas rojas
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            createRose();
        }
    }, 5000);

    // Aparecen 3 girasoles
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            createSunflower();
        }
    }, 9000);

    // Se dibuja el tulipán final
    setTimeout(() => {
        createFinalTulip();
    }, 13000);

    // Añadir el mensaje
    setTimeout(() => {
        const message = document.createElement('div');
        message.classList.add('message');
        message.textContent = "Me gustas mucho, pero me gusta más los sueños que tenemos. Disfruta de tus flores virtuales 🌷";
        document.body.appendChild(message);
    }, 20000);
});
