// message.js

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw"; // Posisi acak horizontal
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Durasi animasi acak
    document.querySelector(".hearts").appendChild(heart);

    // Hapus elemen hati setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Munculkan hati baru setiap 600ms
setInterval(createHeart, 600);
