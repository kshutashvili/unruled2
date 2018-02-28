import "./bot.scss";

import MenuModel from '../../js/components/menu.modal.component';
import Bar from "progressbar.js";

const m = new MenuModel();

let circleChart = () => {

    let charts = document.querySelectorAll(".chart");

    charts.forEach((item, i, arr) => {

        let value = item.getAttribute("data-value");
        console.log(`item value: ${value}`);

        let bar = new Bar.Circle(item, {
            strokeWidth: 14,
            text: {
                //value: `${value}%`
            },
            step: function (state, circle) {

                let val = Math.round(circle.value() * 100);
                if (val === 0) {
                    circle.setText('');
                } else {
                    circle.setText(`${val}%`);
                }

            }
        });

        if (value < 100) {

            bar.animate(`0.${value}`);
        }

    });


};

document.addEventListener("DOMContentLoaded", () => {

    m.init();

    circleChart();

});