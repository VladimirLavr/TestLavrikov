const form = document.querySelector(".newForm");
const first_name = document.querySelector(".first_name");
const last_name = document.querySelector(".last_name");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const sub = document.querySelector(".sub");




// Проверка по двум полям first_name, last_name


function firstLastName(name) {
    if (name.value.length < 2) {
        name.style.borderColor = "red";


    } else if (name.value.length >= 2) {
        name.style.borderColor = "#12f875";
        name.value = "";
    }
}

//===================================================================


// Проверка по Email
function isEmailValid(value) {
    const searchEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    return searchEmail.test(value);
}

function emailValid() {
    if (isEmailValid(email.value)) {
        email.style.borderColor = "#12f875";
        email.value = "";

    } else {

        email.style.borderColor = "red";
    }
}

//===================================================================

// Проверка по Tel

let tel = window.intlTelInput(phone)

function telValid() {
    if (phone.value.length < 11) {

        phone.style.borderColor = "red";

    } else {
        phone.style.borderColor = "#12f875"
        phone.value = "";
    }
}



//===================================================================


sub.addEventListener('click', (event) => {
    event.preventDefault();

    firstLastName(first_name);
    firstLastName(last_name);
    // firstLastName(last_name);

    emailValid();

    telValid();

})


