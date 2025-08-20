// Music Toggle (Removed as Spotify Embed handles its own playback)

const hearts = document.querySelectorAll('.heart');
const heartMessage = document.getElementById('heartMessage');

hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        // Remove 'show' class from previous message if any
        if (heartMessage.classList.contains('show')) {
            heartMessage.classList.remove('show');
            // Wait for animation to finish before changing text and showing again
            setTimeout(() => {
                heartMessage.textContent = this.getAttribute('data-message');
                heartMessage.classList.add('show');
            }, Login to continue using Login to continue using
