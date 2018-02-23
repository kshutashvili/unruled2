import "./index.scss";
import "slick-carousel";

import MenuList from '../../js/components/menu.list.component';
import Menu from '../../js/components/menu.modal.component';

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
    MenuList();
    Menu();
});