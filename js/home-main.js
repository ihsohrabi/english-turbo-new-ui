import Swiper from "../../node_modules/swiper/swiper-bundle";

var swiper = new Swiper(".topTeachers", {
  slidesPerView: 3,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelector("#home-container").addEventListener("scroll", (e) => {
  console.log(e);
  
});
