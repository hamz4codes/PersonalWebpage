let isPlaying = false;
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    if (music.paused) {
        music.play();
        btn.textContent = "Müziği Kapat";
    } else {
        music.pause();
        btn.textContent = "Müziği Aç";
    }
}

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function(event) {
        const isim = document.getElementById("name").value;
        const mesaj = document.getElementById("message").value;

        if (isim === "" || mesaj === "") {
            event.preventDefault();
            alert("Lütfen boş alanları doldur!");
        } else {
            alert("Mesajınız alındı, teşekkürler!");
        }
    });
}