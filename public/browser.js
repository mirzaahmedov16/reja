console.log("Frontend js ishga tushdi");

function itemTemplate(item) {
    return `<li
        class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        
        <span class="item-text">${item.reja}</span>

        <div>
            <button
                data-id="${item._id}"
                class="edit-me btn btn-secondary btn-sm mr-1">
                Ozgartirish
            </button>

            <button
                data-id="${item._id}"
                class="delete-me btn btn-danger btn-sm">
                Ochirish
            </button>
        </div>

    </li>`;
}


// ==================== CREATE ====================

let createField = document.getElementById("create-field");

document
    .getElementById("create-form")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        axios.post("/create-item", {
            reja: createField.value
        })
        .then((response) => {

            document
                .getElementById("item-list")
                .insertAdjacentHTML(
                    "beforeend",
                    itemTemplate(response.data)
                );

            createField.value = "";
            createField.focus();

        })
        .catch((err) => {
            console.log("CREATE ERROR:", err);
        });
    });


// ==================== DELETE + EDIT ====================

document.addEventListener("click", function (e) {

    console.log("CLICK:", e.target);


    // ==================== DELETE ====================

    if (e.target.classList.contains("delete-me")) {

        console.log("DELETE BUTTON BOSILDI");

        if (confirm("Aniq ochirmoqchimisiz?")) {

            let id = e.target.getAttribute("data-id");

            console.log("YUBORILAYOTGAN ID:", id);

            axios.post("/delete-item", {
                id: id
            })
            .then((response) => {

                console.log("SERVER JAVOBI:", response.data);

                e.target.parentElement.parentElement.remove();

            })
            .catch((err) => {
                console.log("DELETE ERROR:", err);
            });
        }
    }


    // ==================== EDIT ====================

    if (e.target.classList.contains("edit-me")) {

        console.log("EDIT BUTTON BOSILDI");

        let item = e.target.parentElement.parentElement;

        let itemText = item.querySelector(".item-text");

        let userInput = prompt(
            "O'zgartirish kiriting",
            itemText.innerHTML
        );

        if (userInput) {

            axios.post("/edit-item", {

                id: e.target.getAttribute("data-id"),

                newInput: userInput

            })
            .then((response) => {

                console.log("EDIT SERVER JAVOBI:", response.data);

                itemText.innerHTML = userInput;

            })
            .catch((err) => {

                console.log("EDIT ERROR:", err);

            });
        }
    }

});


// ==================== DELETE ALL ====================

document
    .getElementById("clean-all")
    .addEventListener("click", function () {

        axios
            .post("/delete-all", {
                delete_all: true
            })
            .then((response) => {

                alert(response.data.state);

                document.location.reload();

            })
            .catch((err) => {

                console.log("DELETE ALL ERROR:", err);

            });
    });