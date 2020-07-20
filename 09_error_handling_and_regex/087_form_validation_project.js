//event listeners for different blocks
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

const name = document.getElementById("name");
const zip = document.getElementById("zip");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

//function for name validation
function validateName() {
    const re = /^[a-zA-Z]{2,10}$/;
    if (re.test(name.value) === false) {
        name.classList.add("is-invalid");
    } else {
        name.classList.remove("is-invalid");
    }
}

//function to validate zip
function validateZip() {
    const re = /^[0-9]{5}(-[0-9]{4})?$/;
    if (re.test(zip.value) === false) {
        zip.classList.add("is-invalid");
    } else {
        zip.classList.remove("is-invalid");
    }
}

//function to validate email
function validateEmail() {
    const re = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+).([a-z]{2,5})$/;
    if (re.test(email.value) === false) {
        email.classList.add("is-invalid");
    } else {
        email.classList.remove("is-invalid");
    }
}

//function to validate phone
function validatePhone() {
    const re = /^([0-9]{2}[-]?([0-9]{3}[-]?([0-9]{3})[-]?([0-9]{2})))$/;
    if (re.test(phone.value) === false) {
        phone.classList.add("is-invalid");
    } else {
        phone.classList.remove("is-invalid");
    }
}
