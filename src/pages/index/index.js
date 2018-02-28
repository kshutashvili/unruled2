import "./index.scss";
import "slick-carousel";

import MenuModel from '../../js/components/menu.modal.component';

const m = new MenuModel();


let TopSlider = () => {

    const $slider = $("#slick_cards");
    const $SliderSync = $("#slick_text_sync");

    $slider.slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: true,
        asNavFor: $SliderSync
    });

    $SliderSync.slick({
        speed: 1500,
        infinite: true,
        arrows: false,
        dots: true,
        asNavFor: $slider
    });
};

document.addEventListener("DOMContentLoaded", () => {
    TopSlider();

    //m.init();

});