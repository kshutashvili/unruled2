export default () => {

    const containers = document.querySelectorAll(".file_upload_block");

    console.log(containers);

    containers.forEach(element => {
        let container = element;

        let input = container.querySelector(".files_input");

        input.addEventListener("change", () => {

            let files = input.files;
            console.log("files: ", files);

            for (const file of files) {

                let div = document.createElement("div");
                div.className = "file";

                let span = document.createElement("span");
                span.className = "icon";
                span.innerHTML = `<i class="far fa-file"></i>`;

                let p = document.createElement("p");
                p.className = "name";
                p.innerHTML = `${file.name}<i class="fas fa-times delete" data-name="${file.name}"></i>`;

                div.appendChild(span);
                div.appendChild(p);

                container.insertBefore(div, container.firstChild);

            }

        }

        );
    });

};