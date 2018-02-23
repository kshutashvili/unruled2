export default () => {

    const $MenuList = $("#menu_list");
    const $dropdown = $MenuList.find(".dropdown");

    $dropdown.each((i, elem) => {
        
        $(elem).off("click");
        $(elem).on("click", (e)=>{
            $(elem).toggleClass("active");

        });
    });

};