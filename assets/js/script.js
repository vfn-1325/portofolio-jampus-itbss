// ScrollReveal Animation
ScrollReveal().reveal('.animasi', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-out',
    reset: false
});

// Toggle Dark Mode
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("kontak-pesan");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); 
            const name = form.querySelector('input[name="nama"]').value;
            const email = form.querySelector('input[name="email"]').value;
            const message = form.querySelector('textarea[name="pesan"]').value;
            if (name === "" || email === "" || message === "") {
                alert("Mohon isi semua kolom pesannya sebelum menekan tombol kirim.");
                return;
            }
            alert("Terima kasih, pesan Anda telah dikirim!");
            form.reset();
        });
    };
});

const countdownEl = document.getElementById("countdown");
if (countdownEl) {
    const targetDate = new Date("2028-08-01T00:00:00").getTime();
    const updateCountdown = () => {
        const now = new Date().getTime();
        const gap = targetDate - now;
        if (gap < 0) {
            countdownEl.textContent = "🎉 Saya sudah lulus!";
        return;
        };
        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((gap / (1000 * 60)) % 60);
        const seconds = Math.floor((gap / 1000) % 60);
        countdownEl.textContent = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
    };
    updateCountdown();
    setInterval(updateCountdown, 1000);
};