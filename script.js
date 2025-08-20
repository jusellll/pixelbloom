document.getElementById('musicToggle').addEventListener('click', function() {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play();
        this.querySelector('span').textContent = 'Pause Music';
    } else {
        music.pause();
        this.querySelector('span').textContent = 'Play Music';
    }
});

const hearts = document.querySelectorAll('.heart');
const heartMessage = document.getElementById('heartMessage');

hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        heartMessage.textContent = this.getAttribute('data-message');
    });
});

document.getElementById('yesBtn').addEventListener('click', function() {
    alert('Yay! I’m so happy to hear that!');
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert('That’s okay! I’ll always cherish our moments.');
});
