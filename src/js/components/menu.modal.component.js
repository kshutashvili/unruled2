export default class MenuModel {

    constructor() {

        this.modal = $("#menu_modal_component"),
            this.menuBlock = $("#menu_block"),
            this.loginBlock = $("#login_block"),

            this.btns = {
                login_btn: $("#login_btn"),
                menu_icon_btn: $("#menu_icon_btn"),
            },
            this.flags = {
                modal: false,
                menuBlock: false,
                loginBlock: false
            }

    }

    MenuBlockMethod() {

        //init dropdown
        const $menuList = $("#menu_list");
        const $dropdown = $menuList.find(".dropdown");

        $dropdown.each((i, elem) => {

            $(elem).off("click");
            $(elem).on("click", (e) => {
                $(elem).toggleClass("active");

            });
        });

    };

    LoginBlockMethod() {

        const $btn = $("#login_btn");

        $btn.off("click");
        $btn.on("click", (e) => {

            e.preventDefault();

            for (const key in this.flags) {
                console.log(this.flags[key]);
            }

        });

    };

    ModalSwitchMethod() {

        const $close_btn = this.modal.find("#close_modal");

        //add event on btn which open menu component
        this.btns.menu_icon_btn.off("click");
        this.btns.menu_icon_btn.on("click", (e) => {

            e.preventDefault();

            if (!this.flags.modal) {

                this.modal.addClass("active");
                this.flags.modal = true;

            }

        });

        $close_btn.off("click");
        $close_btn.on("click", (e) => {

            e.preventDefault();

            if (this.flags.modal) {

                this.modal.removeClass("active");
                this.flags.modal = false;

            }

        });
    }

    init() {

        this.ModalSwitchMethod();

        if (!this.flags.menuBlock) {
            this.flags.menuBlock = true;
            this.menuBlock.removeClass("hide");
            this.MenuBlockMethod();

        }

    }
};