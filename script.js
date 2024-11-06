// script.js
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    const musicToggle = document.getElementById("music-toggle");

    // Fungsi untuk toggle mute/unmute
    function toggleMusic() {
        if (audio.muted) {
            audio.muted = false;
            musicToggle.textContent = "Matikan Suara";
            audio.play();
        } else {
            audio.muted = true;
            musicToggle.textContent = "Aktifkan Suara";
        }
    }

    // Tambahkan event listener pada tombol
    musicToggle.addEventListener("click", toggleMusic);
});
