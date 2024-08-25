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
        const colors = ['#FF6347', '#FFD700', '#DA70D6', '#32CD32', '#1E90FF', '#FF69B4'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Crear múltiples tulipanes
    for (let i = 0; i < 20; i++) {
        createTulip();
    }
});
