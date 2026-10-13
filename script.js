// Navigasi yang bisa dibuka di layar HP.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
}

// Foto di halaman kenangan:
// letakkan foto milikmu di folder images/ dan samakan nama filenya
// dengan nilai data-photo pada masing-masing gambar.
document.querySelectorAll("img[data-photo]").forEach((img) => {
  const filename = img.dataset.photo;
  img.src = `images/${filename}`;

  // Jika fotonya belum ditambahkan, gunakan ilustrasi placeholder.
  img.addEventListener("error", () => {
    img.src = "images/placeholder.svg";
  }, { once: true });
});

// Pesan kejutan di halaman terakhir.
const surpriseButton = document.querySelector("#surprise-button");
const surpriseMessage = document.querySelector("#surprise-message");

if (surpriseButton && surpriseMessage) {
  surpriseButton.addEventListener("click", () => {
    surpriseMessage.hidden = !surpriseMessage.hidden;
    surpriseButton.textContent = surpriseMessage.hidden
      ? "Satu pesan kecil lagi ♡"
      : "Simpan pesan ini ♡";
  });
}
