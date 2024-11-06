document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        for (let i = 0; i < 3; i++) {  // Menghasilkan beberapa hati
            const heart = document.createElement('div');
            heart.classList.add('heart');

            // Penempatan acak dalam div gambar
            const posX = Math.random() * 100 + '%';
            heart.style.left = posX;

            // Memasukkan hati ke dalam item
            item.appendChild(heart);

            // Menghapus hati setelah animasi selesai
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }
    });
});
