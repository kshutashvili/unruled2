export default () => {

    const $modal = $("#menu_modal_component");
    const $btn = $("#menu_icon_btn");

    const $ModalClose = $modal.find("#close_modal");

    $btn.off("click");
    $btn.on("click", (e) => {

        e.preventDefault();
        $modal.addClass("active");
    });
    $ModalClose.off("click");
    $ModalClose.on("click", (e) => {

        e.preventDefault();
        $modal.removeClass("active");
    });


};