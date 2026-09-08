

console.log("Fronted js ishga tushdi")

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

let createField = document.getElementById("create-field");

document
.getElementById("create-form")
.addEventListener("submit", function(e) {
e.preventDefault();

axios.post("/create-item", {reja: createField.value})
.then((response) => {
    document.getElementById("item-list").
    insertAdjacentHTML("beforeend", itemTemplate (response.data))
    createField.value ="";
    createField.focus();
})
.catch((err) => {
    console.log("Iltimis qaytadan harakat qiling!");
});
});

document.addEventListener("click", function(e) {
    console.log("CLICK:", e.target);


    // delete oper
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
    // edit oper
    if(e.target.classList.contains("edit-me")) {
        let userInput = prompt(
            "O'zgartirish kiriting",
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
        );
        if (userInput) {
            axios.post("/edit-item", {
            id: e.target.getAttribute("data-id"),
                    new_input: userInput,
            }).then((response) => {
                console.log(response.data)
                 e.target.parentElement.parentElement.querySelector(
                    ".item-text"
                ).innerHTML = userInput;
        })
        
            .catch((err) => {
                console.log("Iltimos qaytadan kiriting!")
            });
    
        }
    }
});


document.getElementById("clean-all").addEventListener("click", function (){
    axios.post("/delete-all", {delete_all: true}).then((response) => {
         alert(response.data.state);
         document.location.reload();
    });
});


