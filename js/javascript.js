document.addEventListener("DOMContentLoaded", () => {
  // Insert text ke header di hero section
  const headerHero = document.querySelector("#header-hero span");
  if (headerHero) headerHero.innerHTML = "Yoga, Welcome To Website";
  const insertItaly = document.getElementById("italy-header");
  if (insertItaly) insertItaly.innerHTML = "Italy";
  const insertCanada = document.getElementById("canada-header");
  if (insertCanada) insertCanada.innerHTML = "Canada";
  const insertAustria = document.getElementById("austria-header");
  if (insertAustria) insertAustria.innerHTML = "Austria";
  const insertIndonesia = document.getElementById("indonesia-header");
  if (insertIndonesia) insertIndonesia.innerHTML = "Indonesia";

  // Tambah class sticky ke eelemen header
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (header) {
      if (window.scrollY > 150) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    }
  });

  // ================== VALIDATE & SEND MESSAGE US ==================
  const form = document.getElementById("message-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const nama = formData.get("nama");
    const tglLahir = formData.get("tglLahir");
    const jenisKelamin = formData.get("jenisKelamin");
    const pesan = formData.get("pesan");

    if (!nama || !tglLahir || !jenisKelamin || !pesan) {
      alert("Semua input di form Message Us harus diisi");
      return;
    }

    // Update result span dengan value dari form meesage us
    document.querySelector("#hasil-nama").textContent = nama;
    document.querySelector("#hasil-tglLahir").textContent = tglLahir;
    document.querySelector("#hasil-kelamin").textContent = jenisKelamin;
    document.querySelector("#hasil-pesan").textContent = pesan;

    // Update h3 di result dengan date Saat ini
    const now = new Date();
    const formattedTime = now.toLocaleString();
    document.querySelector(".message-result .time span").textContent = formattedTime;
  });

  //   Settings Swiper JS
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
