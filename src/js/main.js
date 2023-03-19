import Swiper from "swiper";
import "swiper/css";
import "../css/style.css";

const swiper = new Swiper("#js--center-banner", {
    speed: 400,
    spaceBetween: 12,
    autoplay: {
        delay: 500,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
