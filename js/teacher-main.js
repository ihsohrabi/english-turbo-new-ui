import Swiper from "../../node_modules/swiper/swiper-bundle";
import Buttons from "./Buttons/Buttons";
import QcForm from "./QcForm/QcForm";

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  direction: "vertical",
});
var swiper = new Swiper(".navSwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
Buttons();
QcForm();
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("#main-card").classList.toggle("-rotate-y-180");
    document.querySelector("#back-card").classList.toggle("rotate-y-180");
    document.querySelector("#bg-blur").classList.add("backdrop-blur-[3px]");
  }, 1000);
  setTimeout(() => {
    document.querySelector(".etc-menu").classList.remove("opacity-0");
  }, 1500);
});
