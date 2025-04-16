document.addEventListener("DOMContentLoaded", () => {
  //   Swiper JS
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Memasukkan text ke header di hero section
  const insertItaly = document.getElementById("italy-header");
  if (insertItaly) insertItaly.innerHTML = "Italy";
  const insertCanada = document.getElementById("canada-header");
  if (insertCanada) insertCanada.innerHTML = "Canada";
  const insertAustria = document.getElementById("austria-header");
  if (insertAustria) insertAustria.innerHTML = "Austria";
  const insertIndonesia = document.getElementById("indonesia-header");
  if (insertIndonesia) insertIndonesia.innerHTML = "Indonesia";



  
});
